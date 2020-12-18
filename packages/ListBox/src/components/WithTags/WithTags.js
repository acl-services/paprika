/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import CaretDownIcon from "@paprika/icon/lib/CaretDown";
import CaretUpIcon from "@paprika/icon/lib/CaretUp";
import ListBox from "../..";

import Pill, { Pills } from "../Pill";
import { filter } from "../../helpers/filter";
import * as sc from "./WithTags.styles";
/* eslint-disable no-restricted-syntax */
import * as triggerSc from "../Trigger/Trigger.styles";
/* eslint-enable no-restricted-syntax */

const propTypes = {
  /** Expect <ListBoxWithTags.Option /> */
  children: PropTypes.instanceOf(ListBox.Option).isRequired,
  /** filter function for the ListBoxWithTags can be pair with ListBoxWithTags.filter  */
  filter: PropTypes.func,
  /** String message to be display when there are not results  */
  noResultsMessage: PropTypes.node,
  /** Callback whenever the user change a selection on the ListBoxWithTags  */
  onChange: PropTypes.func,
  /** Callback whenever the user input a new custom option like some@email.com, pass undefined to ignore this behaviour */
  onAddCustomOption: PropTypes.func,
  /** Callback once a pill is remove from the Trigger */
  onRemove: PropTypes.func,
  /** Regex that match the input of the user and reports to onAddCustomOption. The default is a basic email regex */
  customOptionRegex: PropTypes.instanceOf(RegExp),
  /** Render prop to override the default Pill style, see example for it's uses.  */
  renderPill: PropTypes.func,
  /** An array of id that helps the ListBoxWithTags to known what elements are selected  */
  selectedOptions: PropTypes.arrayOf(PropTypes.shape({})),
  /** Provides an alternative for rendering the Pill label instead of using the default [{label:value}] coming from the og data */
  pillLabelKey: PropTypes.string,
  /** When this is true, it will display a message indicating all options are selected without showing the popover nor the search input */
  allOptionsAreSelected: PropTypes.bool,
  /** Message to display when all options have been selected */
  allOptionsAreSelectedMessage: PropTypes.string,
};

const defaultProps = {
  customOptionRegex: /^.+@.+\..+$/,
  filter: undefined,
  noResultsMessage: null,
  onAddCustomOption: null,
  onChange: () => {},
  onRemove: () => {},
  renderPill: null,
  pillLabelKey: null,
  selectedOptions: null,
  allOptionsAreSelected: false,
  allOptionsAreSelectedMessage: "",
};

const renderTrigger = ({ t, size, selectedOptions, onRemove, renderPill, pillLabelKey, allOptionsAreSelected }) => (
  ...args
) => {
  const [, , , attributes] = args;
  const { propsForTrigger, refTrigger, dispatch, types, handleKeyDown, handleKeyUp, isOpen } = attributes;

  function handleClick(event) {
    event.stopPropagation();

    if (event.key === "Enter" || event.key === " ") return;
    dispatch({ type: types.togglePopover });
  }

  const handleRemove = option => event => {
    event.stopPropagation();
    onRemove(option);
  };

  const Caret = isOpen ? <CaretUpIcon css={triggerSc.iconStyles} /> : <CaretDownIcon css={triggerSc.iconStyles} />;

  return (
    <sc.Trigger
      ref={refTrigger}
      {...propsForTrigger()}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      size={size}
      allOptionsAreSelected={allOptionsAreSelected}
    >
      <Pills>
        {selectedOptions.map(item => {
          if (typeof renderPill === "function") {
            return renderPill({ option: item, Pill, onRemove: handleRemove(item) });
          }

          const label = pillLabelKey === null ? item.label : item[pillLabelKey];

          if (typeof label !== "string") {
            throw Error(
              `Your item ${JSON.stringify(
                item
              )} must include the attribute "label", or you must indicate which attribute should be rendered as the label via the "pillLabelKey" prop.`
            );
          }

          return (
            <Pill key={label} onRemove={handleRemove(item)} size={size}>
              {label}
            </Pill>
          );
        })}
        {selectedOptions.length ? null : (
          <sc.PlaceHolder>
            <sc.PlaceHolderText>{t("listBoxWithTags.placeholder")}</sc.PlaceHolderText>
          </sc.PlaceHolder>
        )}
      </Pills>
      {allOptionsAreSelected ? null : Caret}
    </sc.Trigger>
  );
};

export default function WithTags(props) {
  const {
    allOptionsAreSelected,
    allOptionsAreSelectedMessage,
    children,
    customOptionRegex,
    filter,
    noResultsMessage,
    onAddCustomOption,
    onChange,
    onRemove,
    pillLabelKey,
    renderPill,
    selectedOptions,
    ...moreProps
  } = props;
  const { t } = useI18n();

  const refDivRoot = React.useRef(null);
  /* eslint-disable react/prop-types */
  const size =
    typeof props.size !== "undefined" && Object.keys(ListBox.types.size).includes(props.size.toUpperCase())
      ? props.size
      : ListBox.types.size.MEDIUM;
  /* eslint-enable react/prop-types */

  const refFilter = React.useRef(null);

  function handleKeyDown(event) {
    const label = event.target.value;
    if (
      onAddCustomOption !== null &&
      typeof onAddCustomOption === "function" &&
      event.key === "Enter" &&
      customOptionRegex.test(label)
    ) {
      event.stopPropagation();
      onAddCustomOption(label);
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
    <div ref={refDivRoot}>
      <ListBox isMulti size={size} onChange={handleChange} {...moreProps}>
        <ListBox.Trigger>
          {renderTrigger({
            allOptionsAreSelected,
            onRemove,
            pillLabelKey,
            renderPill,
            selectedOptions,
            size,
            t,
          })}
        </ListBox.Trigger>
        {allOptionsAreSelected ? null : (
          <ListBox.Filter filter={filter} ref={refFilter} onKeyDown={handleKeyDown} {...noResultMessageProp} />
        )}
        {allOptionsAreSelected ? null : React.Children.count(children) > 0 ? (
          children
        ) : (
          <ListBox.RawItem>{noResultsMessage}</ListBox.RawItem>
        )}
      </ListBox>

      {allOptionsAreSelected && (
        <sc.AllOptionsAreSelected size={size}>
          {allOptionsAreSelectedMessage || t("listBoxWithTags.all_items_have_been_selected")}
        </sc.AllOptionsAreSelected>
      )}
    </div>
  );
}

WithTags.propTypes = propTypes;
WithTags.defaultProps = defaultProps;

WithTags.Box = ListBox.Box;
WithTags.Divider = ListBox.Divider;
WithTags.Footer = ListBox.Footer;
WithTags.Option = ListBox.Option;
WithTags.Popover = ListBox.Popover;
WithTags.RawItem = ListBox.RawItem;
WithTags.filter = filter;
