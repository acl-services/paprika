import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import { getA11yAttributesForOption } from "../../helpers/DOMAttributes";
import { isOptionVisible, isOptionSelected, handleClickOption } from "../Options/helpers/options";
import { OptionStyled } from "./Option.styles";
import useIsSelectedOption from "./useIsSelectedOption";

const propTypes = {
  /** String, number or JSX content */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /** Describe if the option is selected or not */
  isSelected: PropTypes.bool,

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
};

const defaultProps = {
  isDisabled: false,
  isHidden: false,
  // internal prop, which shouldn't be documented
  preventDefaultOnSelect: false, // eslint-disable-line
  isSelected: false,
  label: null,
  onClick: null,
  value: null,
};

export default function Option(props) {
  const [state, dispatch] = useListBox();
  const { activeOption, isDisabled: isDisabledState } = state;
  const { index, groupId, label } = props; // eslint-disable-line

  useIsSelectedOption({ index, props });

  if (typeof state.options[index] === "undefined") {
    return null;
  }

  if (!isOptionVisible(state, index)) {
    return null;
  }

  /* eslint-disable react/prop-types */
  const isSelected = isOptionSelected(state, index);
  const isDisabled = isDisabledState || props.isDisabled;
  const id = state.options[index].id;
  return (
    <OptionStyled
      {...getA11yAttributesForOption(state.options[index].isSelected)}
      hasPreventDefaultOnSelect={props.preventDefaultOnSelect}
      id={id}
      isActive={activeOption === index}
      isDisabled={isDisabled}
      isSelected={isSelected}
      key={index}
      onClick={handleClickOption({ props, state, dispatch })}
      data-pka-anchor={isSelected ? "list-option--is-selected" : "list-option"}
    >
      {typeof props.children === "function" ? props.children({ isSelected, isDisabled, id }) : props.children}
    </OptionStyled>
  );
  /* eslint-enable react/prop-types */
}

Option.componentType = "ListBox.Option";
Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
