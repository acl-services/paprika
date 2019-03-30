import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import Label from "../Label";
import handleKeyboardKeys from "../../helpers/handleKeyboardKeys";
import useListBox from "../../store/useListBox";
import * as actionTypes from "../../store/actionTypes";

import {
  ListBoxTriggerStyled,
  TriggerArrowStyled,
  ButtonClearStyled,
  TriggerActionIconsContainer,
} from "./Trigger.styles";
import { getDOMAttributesForListBoxButton } from "../../helpers/DOMAttributes";

const propTypes = {
  placeholder: PropTypes.string.isRequired,
  renderTrigger: PropTypes.func,
};

const defaultProps = {
  renderTrigger: null,
};

export default function Trigger(props) {
  const [state, dispatch] = useListBox();
  const { renderTrigger, placeholder } = props;

  const { isDisabled, refTriggerContainer, refTrigger, isMulti } = state;

  const handleClick = () => {
    if (isDisabled) {
      return;
    }

    dispatch({ type: actionTypes.togglePopover });
  };

  const handleClickClear = () => {
    if (isDisabled) {
      return;
    }

    dispatch({ type: actionTypes.clear });
  };

  return (
    <ListBoxTriggerStyled isDisabled={isDisabled} ref={refTriggerContainer}>
      {renderTrigger ? (
        renderTrigger(state, dispatch, { getDOMAttributesForListBoxButton })
      ) : (
        <RawButton
          type="button"
          onClick={handleClick}
          ref={refTrigger}
          onKeyDown={handleKeyboardKeys(state, dispatch)}
          onKeyUp={() => {}}
          isDisabled={isDisabled}
        >
          <Label
            activeOption={state.options[state.activeOption]}
            isMulti={isMulti}
            options={state.options}
            placeholder={placeholder}
            selectedOptions={state.selectedOptions}
          />
        </RawButton>
      )}
      <TriggerActionIconsContainer>
        <ButtonClearStyled
          hasRenderTrigger={renderTrigger}
          hasSelectedOptions={state.selectedOptions.length}
          isDisabled={isDisabled}
          onClick={handleClickClear}
        >
          <span dangerouslySetInnerHTML={{ __html: "&times;" }} />
        </ButtonClearStyled>
        <TriggerArrowStyled
          hasRenderTrigger={renderTrigger}
          isDisabled={isDisabled}
          isOpen={state.isPopoverOpen}
          isInlineDisplay={state.isInlineDisplay}
          dangerouslySetInnerHTML={{ __html: "&#x25BC;" }}
        />
      </TriggerActionIconsContainer>
    </ListBoxTriggerStyled>
  );
}

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
