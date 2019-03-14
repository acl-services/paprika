import React from "react";
import { OptionStyled, OptionDividerStyled } from "./Options.styles";
import { getDOMAttributesForListBoxOption } from "../../helpers/DOMAttributes";
import { isOptionVisible, isOptionSelected } from "../../helpers/options";
import * as actionTypes from "../../store/actionTypes";
import useStore from "../../store/useStore";
import Checker from "../Checker";

export default function Options() {
  const [state, dispatch] = useStore();
  // const { state, onClickOption } = props;
  const optionsArray = Object.keys(state.options);
  let lastGroupTitle = null;

  const handleClickOption = key => () => {
    if (state.isDisabled || state.options[key].isDisabled) {
      return;
    }

    const { options, hasFilter, isMulti, refFilterInput } = state;
    const option = options[key];
    const index = option.index;
    const isOptionActionGroup = option.isOptionActionGroup;

    if (hasFilter && isMulti) {
      refFilterInput.current.focus();
    }

    if (isOptionActionGroup && isMulti) {
      dispatch({
        type: actionTypes.toggleSelectOptionsByGroup,
        payload: { index, group: option.value },
      });
      return;
    }

    if (isMulti) {
      dispatch({
        type: actionTypes.setOptionOnMultipleSelection,
        payload: { activeOptionIndex: index, isPopoverOpen: true, shouldListBoxContentScroll: false },
      });
    } else {
      dispatch({
        type: actionTypes.setOptionOnSingleSelection,
        payload: { activeOptionIndex: index, isPopoverOpen: false },
      });
    }
  };

  const { options, hasNoResults, activeOption, isDisabled, renderChecker } = state;

  return optionsArray.map(key => {
    let shouldHaveGroupTitle = false;
    if (options[key].groupTitle && lastGroupTitle !== options[key].groupTitle) {
      shouldHaveGroupTitle = true;
      lastGroupTitle = options[key].groupTitle;
    }

    return (
      <React.Fragment key={key}>
        {shouldHaveGroupTitle && !hasNoResults ? (
          <OptionDividerStyled aria-hidden="true">{options[key].groupTitle}</OptionDividerStyled>
        ) : null}
        {isOptionVisible(state, key) ? (
          <OptionStyled
            {...getDOMAttributesForListBoxOption(options[key].index, state)()}
            id={options[key].id}
            isActive={activeOption === options[key].index}
            isSelected={isOptionSelected(state, options[key].index)}
            key={options[key].id}
            onClick={handleClickOption(key)}
            role="option"
            isDisabled={isDisabled || options[key].isDisabled}
          >
            <Checker
              index={Number.parseInt(key, 10)}
              isChecked={isOptionSelected(state, options[key].index)}
              renderChecker={renderChecker}
            />
            {options[key].content}
          </OptionStyled>
        ) : null}
      </React.Fragment>
    );
  });
}
