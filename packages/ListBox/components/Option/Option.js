import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import { getA11yAttributesForOption } from "../../helpers/DOMAttributes";
import { isOptionVisible, isOptionSelected, handleClickOption } from "../Options/helpers";
import { OptionStyled, OptionDividerStyled } from "./Option.styles";
import Checker from "../Checker";

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /** String, number or JSX content */
  children: PropTypes.node.isRequired,

  /** Describe if the option is selected or not */
  isSelected: PropTypes.bool,

  /** Describe if the option is enable or not */
  isDisabled: PropTypes.bool,

  /** Describe if the option is hidden or not */
  isHidden: PropTypes.bool,

  /** Describe if the option will be accept click or any other keyboard interaction
      this is helpful when you want to add an option that help visually to trasmit the
      UI message better.
  */
  preventDefaultOnSelect: PropTypes.bool,

  /** When the children are not a String, label should need to be add so the filter can work  */
  label: PropTypes.string,

  /** Callback for the clicking event */
  onClick: PropTypes.func,

  /** Value of your option this can be any data structure  */
  value: PropTypes.any, // eslint-disable-line

  /** Let you render your own checker for a specific option  */
  renderChecker: PropTypes.func,
};
/* eslint-enable react/no-unused-prop-types */

const defaultProps = {
  isDisabled: false,
  isHidden: false,
  preventDefaultOnSelect: false,
  isSelected: false,
  label: null,
  onClick: null,
  renderChecker: null,
  value: null,
};

let lastGroupId = null;

export default function Option(props) {
  const [state, dispatch] = useListBox();
  const { hasNoResults, activeOption, isDisabled, renderChecker } = state;
  const { index, groupId, label, isGroupSelector } = props; // eslint-disable-line

  if (typeof state.options[index] === "undefined") {
    return null;
  }

  let shouldHaveGroupTitle = false;
  if (groupId && lastGroupId !== groupId) {
    shouldHaveGroupTitle = true;
    lastGroupId = groupId;
  }

  let GroupDividerComponent = null;
  if (shouldHaveGroupTitle && !isGroupSelector && !hasNoResults) {
    GroupDividerComponent = <OptionDividerStyled aria-hidden="true">{label}</OptionDividerStyled>;
  }

  if (!isOptionVisible(state, index)) {
    return null;
  }

  return (
    <React.Fragment>
      {GroupDividerComponent}
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
          renderChecker={props.renderChecker || renderChecker}
          hasPreventDefaultOnSelect={props.preventDefaultOnSelect}
        />
        {typeof props.children === "function" ? props.children() : props.children}
      </OptionStyled>
    </React.Fragment>
  );
}

Option.componentType = "ListBox.Option";
Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
