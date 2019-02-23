import React from "react";
import PropTypes from "prop-types";
import { ListBoxOptionStyled, ListBoxOptionDividerStyled } from "../../ListBox.styles";
import { getDOMAttributesForListBoxOption } from "../../functions/DOMAttributes";

const propTypes = {
  state: PropTypes.any,
  isOptionVisible: PropTypes.func.isRequired,
  isOptionSelected: PropTypes.func.isRequired,
  onClickOption: PropTypes.func.isRequired,
};

export default function Options(props) {
  const { state, isOptionVisible, isOptionSelected, onClickOption } = props;
  const optionsArray = Object.keys(state.options);
  let lastGroupTitle = null;

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
        {isOptionVisible(key)() ? (
          <ListBoxOptionStyled
            {...getDOMAttributesForListBoxOption(state.options[key].index, state)()}
            id={state.options[key].id}
            isActive={state.activeOption === state.options[key].index}
            isSelected={isOptionSelected(state.options[key].index)()}
            key={state.options[key].id}
            onClick={onClickOption(state.options[key].index)}
            role="option"
          >
            {state.options[key].content}
          </ListBoxOptionStyled>
        ) : null}
      </React.Fragment>
    );
  });
}

Options.propTypes = propTypes;
