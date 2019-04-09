import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import { getA11yAttributesForOption } from "../../helpers/DOMAttributes";
import { isOptionVisible, isOptionSelected } from "../../helpers/options";
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
  isInteractive: PropTypes.bool,

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
  isInteractive: true,
  isSelected: false,
  label: null,
  onClick: null,
  renderChecker: null,
  value: null,
};

let lastGroupTitle = null;

export default function Option(props) {
  const [state, dispatch] = useListBox();
  const { hasNoResults, activeOption, isDisabled, renderChecker } = state;
  const { index, groupName } = props; // eslint-disable-line

  let shouldHaveGroupTitle = false;
  if (groupName && lastGroupTitle !== groupName) {
    shouldHaveGroupTitle = true;
    lastGroupTitle = groupName;
  }

  let GroupName = null;
  if (shouldHaveGroupTitle && !hasNoResults) {
    GroupName = <OptionDividerStyled aria-hidden="true">{groupName}</OptionDividerStyled>;
  }

  const handleClickOption = event => {
    const key = props.index; // eslint-disable-line
    const { options, hasFilter, isMulti, refFilterInput } = state;
    const option = options[key];
    const isOptionActionGroup = option.isOptionActionGroup;

    if (state.isDisabled || props.isDisabled) {
      return;
    }

    if (props.onClick) {
      const result = props.onClick(key, options);
      if (typeof result === "boolean" && result === false) {
        return;
      }
    }

    if (state.refListBox.current.contains(event.target) && document.activeElement === document.body && !hasFilter) {
      state.refListBoxContainer.current.focus();
    }

    if (hasFilter && isMulti) {
      refFilterInput.current.focus();
    }

    if (isOptionActionGroup && isMulti) {
      dispatch({
        type: useListBox.types.toggleSelectOptionsByGroup,
        payload: { index, group: option.value },
      });
      return;
    }

    if (isMulti) {
      dispatch({
        type: useListBox.types.toggleMultipleSelection,
        payload: { activeOptionIndex: index, isPopoverOpen: true, shouldListBoxContentScroll: false },
      });
    } else {
      dispatch({
        type: useListBox.types.toggleSingleSelection,
        payload: { activeOptionIndex: index, isPopoverOpen: false },
      });
    }
  };

  if (!isOptionVisible(state, index)) {
    return null;
  }

  return (
    <React.Fragment>
      {GroupName}
      <OptionStyled
        {...getA11yAttributesForOption(state.options[index].isSelected)}
        id={state.options[index].id}
        isActive={activeOption === index}
        isSelected={isOptionSelected(state, index)}
        key={index}
        onClick={handleClickOption}
        isDisabled={isDisabled || props.isDisabled}
      >
        <Checker
          index={Number.parseInt(index, 10)}
          isChecked={isOptionSelected(state, index)}
          renderChecker={props.renderChecker || renderChecker}
        />
        {typeof props.children === "function" ? props.children() : props.children}
      </OptionStyled>
    </React.Fragment>
  );
}

Option.componentType = "ListBox.Option";
Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
