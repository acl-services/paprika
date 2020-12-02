import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import ListBox from "../..";

import Pill, { Pills } from "../Pill";
import { filter } from "../../helpers/filter";
import * as sc from "./WithTags.styles";

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
  renderTriggerPillLabel: PropTypes.func,
};

const defaultProps = {
  customOptionRegex: /^.+@.+\..+$/,
  filter: undefined,
  noResultsMessage: null,
  onAddCustomOption: null,
  onChange: () => {},
  onRemove: () => {},
  renderPill: null,
  renderTriggerPillLabel: null,
  selectedOptions: null,
};

const renderTrigger = ({ t, size, selectedOptions, onRemove, renderPill, renderTriggerPillLabel }) => (...args) => {
  const [, , , attributes] = args;
  const { propsForTrigger, refTrigger, dispatch, types, handleKeyDown, handleKeyUp } = attributes;

  function handleClick(event) {
    event.stopPropagation();

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

          const label = renderTriggerPillLabel === null ? item.label : renderTriggerPillLabel(item);

          if (typeof label !== "string") {
            throw Error(
              "Label property in your object should be a string, are you returning a string from renderTriggerPillLabel?"
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
    </sc.Trigger>
  );
};

export default function WithTags(props) {
  const {
    children,
    customOptionRegex,
    filter,
    noResultsMessage,
    onAddCustomOption,
    onChange,
    onRemove,
    renderPill,
    renderTriggerPillLabel,
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
            onRemove,
            renderPill,
            renderTriggerPillLabel,
            selectedOptions,
            size,
            t,
          })}
        </ListBox.Trigger>
        <ListBox.Filter filter={filter} ref={refFilter} onKeyDown={handleKeyDown} {...noResultMessageProp} />
        {React.Children.count(children) > 0 ? children : <ListBox.RawItem>{noResultsMessage}</ListBox.RawItem>}
      </ListBox>
    </div>
  );
}

WithTags.propTypes = propTypes;
WithTags.defaultProps = defaultProps;
WithTags.Option = ListBox.Option;
WithTags.RawItem = ListBox.RawItem;
WithTags.filter = filter;
