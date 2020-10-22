import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/listbox";
import useI18n from "@paprika/l10n/lib/useI18n";
import Pill, { Pills } from "./components/Pill";
import * as sc from "./ListBoxTags.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  noResultsMessage: PropTypes.string,
  onCustomOption: PropTypes.func,
  regexCustomOption: PropTypes.instanceOf(RegExp),
};

const defaultProps = {
  onCustomOption: null,
  noResultsMessage: null,
  regexCustomOption: /^.+@.+\..+$/,
};

const renderTrigger = ({ t, size, refListBox }) => (...args) => {
  const [selected, options, , attributes] = args;
  const { propsForTrigger, refTrigger, dispatch, types, handleKeyDown, handleKeyUp } = attributes;

  function handleClick(event) {
    if (event.target.dataset.pkaAnchor === "listbox-tags-pill-delete") {
      return;
    }

    if (event.key === "Enter" || event.key === " ") return;
    dispatch({ type: types.togglePopover });
  }

  const handleDelete = option => () => {
    refListBox.current.toggleSelectedOption(option.index);
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
        {selected.map(index => {
          return (
            <Pill key={options[index].label} onDelete={handleDelete(options[index])}>
              {options[index].label}
            </Pill>
          );
        })}
        {selected.length ? null : <div>{t("listBoxTags.placeholder")}</div>}
      </Pills>
    </sc.Trigger>
  );
};

export default function ListBoxTags(props) {
  const { children, noResultsMessage, onCustomOption, regexCustomOption, ...moreProps } = props;
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

  const noResultMessageProp = noResultsMessage === null ? {} : { noResultsMessage };

  return (
    <ListBox ref={refListBox} isMulti size={size} {...moreProps}>
      <ListBox.Trigger>{renderTrigger({ size, refListBox, t })}</ListBox.Trigger>
      <ListBox.Filter ref={refFilter} onKeyDown={handleKeyDown} {...noResultMessageProp} />
      {children}
    </ListBox>
  );
}

ListBoxTags.propTypes = propTypes;
ListBoxTags.defaultProps = defaultProps;
ListBoxTags.Option = ListBox.Option;
