import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import { getA11yAttributesForOption } from "../../helpers/DOMAttributes";
import { isOptionVisible, isOptionSelected, handleClickOption } from "../Options/helpers/options";
import { OptionStyled } from "./Option.styles";
import Checker from "../Checker";

const propTypes = {
  /** String, number or JSX content */
  children: PropTypes.node.isRequired,

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

  /** Let you render your own checker for a specific option  */
  renderCheckbox: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  isHidden: false,
  // internal prop, which shouldn't be documented
  preventDefaultOnSelect: false, // eslint-disable-line
  isSelected: false,
  label: null,
  onClick: null,
  renderCheckbox: null,
  value: null,
};

export default function Option(props) {
  const [state, dispatch] = useListBox();
  const { activeOption, isDisabled, renderCheckbox } = state;
  const { index, groupId, label } = props; // eslint-disable-line

  if (typeof state.options[index] === "undefined") {
    return null;
  }

  if (!isOptionVisible(state, index)) {
    return null;
  }

  /* eslint-disable react/prop-types */
  return (
    <React.Fragment>
      <OptionStyled
        {...getA11yAttributesForOption(state.options[index].isSelected)}
        hasPreventDefaultOnSelect={props.preventDefaultOnSelect}
        id={state.options[index].id}
        isActive={activeOption === index}
        isDisabled={isDisabled || props.isDisabled}
        isSelected={isOptionSelected(state, index)}
        key={index}
        onClick={handleClickOption({ props, state, dispatch })}
      >
        <Checker
          index={Number.parseInt(index, 10)}
          isChecked={isOptionSelected(state, index)}
          renderCheckbox={props.renderCheckbox || renderCheckbox}
          hasPreventDefaultOnSelect={props.preventDefaultOnSelect}
        />
        {typeof props.children === "function" ? props.children() : props.children}
      </OptionStyled>
    </React.Fragment>
  );
  /* eslint-enable react/prop-types */
}

Option.componentType = "ListBox.Option";
Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
