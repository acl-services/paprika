import React from "react";
import { OptionStyled, OptionDividerStyled } from "./Options.styles";
import { getDOMAttributesForListBoxOption } from "../../helpers/DOMAttributes";
import { isOptionVisible, isOptionSelected } from "../../helpers/options";
import * as actionTypes from "../../store/actionTypes";
import useStore from "../../store/useStore";
import Checker from "../Checker";

export default function Options(props) {
  const [state, dispatch] = useStore();

  const optionsArray = Object.keys(state.options);
  let lastGroupTitle = null;

  const handleClickOption = React.useCallback(
    key => event => {
      if (state.isDisabled || state.options[key].isDisabled) {
        return;
      }

      const { options, hasFilter, isMulti, refFilterInput } = state;
      const option = options[key];
      const index = option.index;
      const isOptionActionGroup = option.isOptionActionGroup;

      if (
        state.refListBox.current.contains(event.target) &&
        document.activeElement === document.body &&
        !state.hasFilter
      ) {
        state.refListBoxContainer.current.focus();
      }

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
    },
    []
  );

  const { options, hasNoResults, activeOption, isDisabled, renderChecker } = state;

  const OptionsFromState = optionsArray.map(key => {
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
          <React.Fragment>
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
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  });

  return <React.Fragment>{OptionsFromState}</React.Fragment>;
}
