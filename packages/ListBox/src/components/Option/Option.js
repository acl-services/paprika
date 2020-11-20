import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import { OnChangeContext } from "../../store/OnChangeProvider";
import { getA11yAttributesForOption } from "../../helpers/DOMAttributes";
import { isOptionVisible, isOptionSelected, handleClickOption } from "../Options/helpers/options";
import useIsSelectedOption from "./useIsSelectedOption";
import * as sc from "./Option.styles";

const propTypes = {
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
  preventDefaultOnSelect: PropTypes.bool,
};

const defaultProps = {
  isDisabled: false,
  isHidden: false,
  preventDefaultOnSelect: false,
  isSelected: null,
  defaultIsSelected: null,
  label: null,
  onClick: null,
  value: null,
};

export default function Option(props) {
  const [state, dispatch] = useListBox();
  const onChangeContext = React.useContext(OnChangeContext);
  const { activeOption, listBoxHasFocus, isDisabled: isDisabledState, size } = state;
  const { index, groupId, label, ...moreProps } = props; // eslint-disable-line

  useIsSelectedOption({ index, props });

  if (typeof state.options[index] === "undefined") {
    return null;
  }

  if (!isOptionVisible(state, index)) {
    return null;
  }

  const isSelected = isOptionSelected(state, index);
  const isDisabled = isDisabledState || props.isDisabled;
  const id = state.options[index].id;

  return (
    <sc.Option
      {...moreProps}
      {...getA11yAttributesForOption(isSelected)}
      hasPreventDefaultOnSelect={props.preventDefaultOnSelect}
      id={id}
      listBoxHasFocus={listBoxHasFocus}
      isActive={activeOption === index}
      isDisabled={isDisabled}
      isSelected={isSelected}
      size={size}
      key={index}
      onClick={handleClickOption({ props, state, dispatch, onChangeContext })}
      data-pka-anchor={isSelected ? "list-option--is-selected" : "list-option"}
      data-pka-prevent-default-on-select={props.preventDefaultOnSelect}
    >
      {typeof props.children === "function" ? props.children({ isSelected, isDisabled, id }) : props.children}
    </sc.Option>
  );
  /* eslint-enable react/prop-types */
}

Option.displayName = "ListBox.Option";
Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
