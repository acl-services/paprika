import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/listbox";
import useI18n from "@paprika/l10n/lib/useI18n";
import Pill, { Pills } from "./components/Pill";
import * as sc from "./ListBoxTags.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.func,
  noResultsMessage: PropTypes.string,
  onChange: PropTypes.func,
  onCustomOption: PropTypes.func,
  onRemove: PropTypes.func,
  regexCustomOption: PropTypes.instanceOf(RegExp),
  selectedOptions: PropTypes.arrayOf(PropTypes.shape({})),
};

const defaultProps = {
  filter: undefined,
  noResultsMessage: null,
  onChange: () => {},
  onCustomOption: null,
  onRemove: () => {},
  regexCustomOption: /^.+@.+\..+$/,
  selectedOptions: null,
};

const renderTrigger = ({ t, size, refListBox, selectedOptions, onRemove }) => (...args) => {
  const [selected, options, , attributes] = args;
  const { propsForTrigger, refTrigger, dispatch, types, handleKeyDown, handleKeyUp } = attributes;

  const areOptionsFromProps = selectedOptions !== null;

  const pillsSelectedOnTrigger = areOptionsFromProps ? selectedOptions : selected;

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
    if (areOptionsFromProps) {
      onRemove(option);
      return;
    }

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
        {pillsSelectedOnTrigger.map(item => {
          if (areOptionsFromProps) {
            return (
              <Pill key={item.label} onRemove={handleRemove(item)}>
                {item.label}
              </Pill>
            );
          }
          return (
            <Pill key={options[item].label} onRemove={handleRemove(options[item])}>
              {options[item].label}
            </Pill>
          );
        })}
        {pillsSelectedOnTrigger.length ? null : <div>{t("listBoxTags.placeholder")}</div>}
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
      <ListBox.Trigger>{renderTrigger({ size, refListBox, selectedOptions, onRemove, t })}</ListBox.Trigger>
      <ListBox.Filter filter={filter} ref={refFilter} onKeyDown={handleKeyDown} {...noResultMessageProp} />
      {children}
    </ListBox>
  );
}

ListBoxTags.propTypes = propTypes;
ListBoxTags.defaultProps = defaultProps;
ListBoxTags.Option = ListBox.Option;
ListBoxTags.filter = (search, data) => {
  const regex = new RegExp(`${search}`, "gi");
  const results = [];
  // eslint-disable-next-line no-use-before-define
  for (const d of data) {
    if (d.label.match(regex) !== null) {
      results.push(d);
    }
  }

  return results;
};
