import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/listbox";
import useI18n from "@paprika/l10n/lib/useI18n";
import Pill, { Pills } from "./components/Pill";
import { filter } from "./helpers";
import * as sc from "./ListBoxTags.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.func,
  noResultsMessage: PropTypes.node,
  onChange: PropTypes.func,
  onCustomOption: PropTypes.func,
  onRemove: PropTypes.func,
  regexCustomOption: PropTypes.instanceOf(RegExp),
  renderPill: PropTypes.func,
  selectedOptions: PropTypes.arrayOf(PropTypes.shape({})),
};

const defaultProps = {
  filter: undefined,
  noResultsMessage: null,
  onChange: () => {},
  onCustomOption: null,
  onRemove: () => {},
  regexCustomOption: /^.+@.+\..+$/,
  renderPill: null,
  selectedOptions: null,
};

const renderTrigger = ({ t, size, selectedOptions, onRemove, renderPill }) => (...args) => {
  const [, , , attributes] = args;
  const { propsForTrigger, refTrigger, dispatch, types, handleKeyDown, handleKeyUp } = attributes;

  function handleClick(event) {
    event.stopPropagation();
    if (event.target.dataset.pkaAnchor === "listbox-tags-pill-delete") {
      return;
    }

    if (event.key === "Enter" || event.key === " ") return;
    dispatch({ type: types.togglePopover });
  }

  const handleRemove = option => event => {
    event.stopPropagation();
    onRemove(option);
  };

  return (
    <sc.Trigger
      ref={refTrigger}
      {...propsForTrigger()}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      size={size}
    >
      <Pills>
        {selectedOptions.map(item => {
          if (typeof renderPill === "function") {
            return renderPill({ option: item, Pill, onRemove: handleRemove(item) });
          }

          return (
            <Pill key={item.label} onRemove={handleRemove(item)}>
              {item.label}
            </Pill>
          );
        })}
        {selectedOptions.length ? null : (
          <sc.PlaceHolder>
            <sc.PlaceHolderText>{t("listBoxTags.placeholder")}</sc.PlaceHolderText>
          </sc.PlaceHolder>
        )}
      </Pills>
    </sc.Trigger>
  );
};

export default function ListBoxTags(props) {
  const {
    children,
    filter,
    noResultsMessage,
    onChange,
    onCustomOption,
    onRemove,
    regexCustomOption,
    renderPill,
    selectedOptions,
    ...moreProps
  } = props;
  const { t } = useI18n();

  /* eslint-disable react/prop-types */
  const size =
    typeof props.size !== "undefined" &&
    [ListBox.types.size.MEDIUM, ListBox.types.size.SMALL, ListBox.types.size.LARGE].includes(props.size)
      ? props.size
      : ListBox.types.size.MEDIUM;
  /* eslint-enable react/prop-types */

  const refListBox = React.useRef(null);
  const refFilter = React.useRef(null);

  function handleKeyDown(event) {
    const label = event.target.value;
    const regexEmail = regexCustomOption;
    if (
      onCustomOption !== null &&
      typeof onCustomOption === "function" &&
      event.key === "Enter" &&
      regexEmail.test(label)
    ) {
      event.stopPropagation();
      onCustomOption(label);
      refFilter.current.reset();
    }
  }

  function handleChange(...args) {
    if (selectedOptions !== null && "length" in selectedOptions) {
      refFilter.current.reset();
    }

    onChange(...args);
  }

  const noResultMessageProp = noResultsMessage === null ? {} : { noResultsMessage };

  return (
    <ListBox ref={refListBox} isMulti size={size} onChange={handleChange} {...moreProps}>
      <ListBox.Trigger>{renderTrigger({ size, refListBox, selectedOptions, renderPill, onRemove, t })}</ListBox.Trigger>
      <ListBox.Filter filter={filter} ref={refFilter} onKeyDown={handleKeyDown} {...noResultMessageProp} />
      {React.Children.count(children) > 0 ? children : <ListBox.RawItem>{noResultsMessage}</ListBox.RawItem>}
    </ListBox>
  );
}

ListBoxTags.propTypes = propTypes;
ListBoxTags.defaultProps = defaultProps;
ListBoxTags.Option = ListBox.Option;
ListBoxTags.filter = filter;
