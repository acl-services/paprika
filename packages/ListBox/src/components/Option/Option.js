import React from "react";
import PropTypes from "prop-types";
import { PropsContext } from "../../store/PropsProvider";
import { getA11yAttributesForOption } from "../../helpers/DOMAttributes";
import * as sc from "./Option.styles";

const Option = props => {
  const { index, groupId, label, id, internalHandleOnClick, isSelected, ...moreProps } = props; // eslint-disable-line
  const providedProps = React.useContext(PropsContext);
  const { isReadOnly, size } = providedProps;
  const isDisabled = providedProps.isDisabled || props.isDisabled || isReadOnly;
  return (
    <sc.Option
      {...moreProps}
      {...getA11yAttributesForOption(isSelected)}
      hasPreventDefaultOnSelect={props.preventDefaultOnSelect}
      id={id}
      isDisabled={isDisabled}
      isSelected={isSelected}
      size={size}
      key={index}
      onClick={event => internalHandleOnClick({ event, isDisabled, onClick: props.onClick, index })}
      data-pka-anchor={isSelected ? "list-option--is-selected" : "list-option"}
      data-pka-prevent-default-on-select={props.preventDefaultOnSelect}
      tabIndex={-1}
    >
      {typeof props.children === "function" ? props.children({ isSelected, isDisabled, id }) : props.children}
    </sc.Option>
  );
};

Option.displayName = "ListBox.Option";

Option.propTypes = {
  /** String, number or JSX content */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /* Controls if the option is selected or not, never combine it with defaultIsSelected */
  isSelected: PropTypes.bool,

  /** Describe if the option started as selected or not */
  defaultIsSelected: PropTypes.bool,

  /** Describe if the option is enable or not */
  isDisabled: PropTypes.bool,

  /** Describe if the option is hidden or not */
  isHidden: PropTypes.bool,

  /** When the children are not a String, label should need to be add so the filter can work  */
  label: PropTypes.string,

  /** Callback for the clicking event */
  onClick: PropTypes.func,

  /** Value of your option this can be any data structure  */
  value: PropTypes.any, // eslint-disable-line

  /** Internal prop, which shouldn't be documented */
  internalHandleOnClick: PropTypes.func.isRequired,

  /** Internal prop, which shouldn't be documented */
  id: PropTypes.string.isRequired,

  /** Internal prop, which shouldn't be documented */
  preventDefaultOnSelect: PropTypes.bool,
};

Option.defaultProps = {
  isDisabled: false,
  isHidden: false,
  preventDefaultOnSelect: false,
  isSelected: null,
  defaultIsSelected: null,
  label: null,
  onClick: null,
  value: null,
};

const OptionMemoized = React.memo(Option);
export default OptionMemoized;
