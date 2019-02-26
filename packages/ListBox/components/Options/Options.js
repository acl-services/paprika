import React from "react";
import { ListBoxOptionStyled, ListBoxOptionDividerStyled } from "../../ListBox.styles";
import { getDOMAttributesForListBoxOption } from "../../helpers/DOMAttributes";
import { isOptionVisible, isOptionSelected } from "../../helpers/options";
import * as actionTypes from "../../store/actionTypes";
import useStore from "../../store/useStore";

export default function Options() {
  const [state, dispatch] = useStore();
  // const { state, onClickOption } = props;
  const optionsArray = Object.keys(state.options);
  let lastGroupTitle = null;

  const handleClickOption = index => () => {
    if (state.isMulti) {
      dispatch({ type: actionTypes.setActiveOption, payload: { activeOptionIndex: index, isPopoverOpen: true } });
      return;
    }

    dispatch({
      type: actionTypes.setOptionOnSingleSelection,
      payload: { activeOptionIndex: index, isPopoverOpen: false },
    });
  };

  return optionsArray.map(key => {
    let shouldHaveGroupTitle = false;
    if (state.options[key].groupTitle && lastGroupTitle !== state.options[key].groupTitle) {
      shouldHaveGroupTitle = true;
      lastGroupTitle = state.options[key].groupTitle;
    }

    return (
      <React.Fragment key={key}>
        {shouldHaveGroupTitle && !state.hasNoResults ? (
          <ListBoxOptionDividerStyled aria-hidden="true">{state.options[key].groupTitle}</ListBoxOptionDividerStyled>
        ) : null}
        {isOptionVisible(state, key) ? (
          <ListBoxOptionStyled
            {...getDOMAttributesForListBoxOption(state.options[key].index, state)()}
            id={state.options[key].id}
            isActive={state.activeOption === state.options[key].index}
            isSelected={isOptionSelected(state, state.options[key].index)}
            key={state.options[key].id}
            onClick={handleClickOption(state.options[key].index)}
            role="option"
          >
            {state.options[key].content}
          </ListBoxOptionStyled>
        ) : null}
      </React.Fragment>
    );
  });
}
