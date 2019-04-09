import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import Label from "../Label";
import handleKeyboardKeys from "../../helpers/handleKeyboardKeys";
import useListBox from "../../useListBox";

import {
  ListBoxTriggerStyled,
  TriggerArrowStyled,
  RawButtonClearButtonStyled,
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

    dispatch({ type: useListBox.types.togglePopover });
  };

  const handleClickClear = () => {
    if (isDisabled) {
      return;
    }

    dispatch({ type: useListBox.types.clear, payload: { isPopoverOpen: false } });
  };

  return (
    <ListBoxTriggerStyled isInlineDisplay={state.isInlineDisplay} isDisabled={isDisabled} ref={refTriggerContainer}>
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
          data-raw-button="trigger"
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
        <RawButtonClearButtonStyled
          hasRenderTrigger={renderTrigger}
          hasSelectedOptions={state.selectedOptions.length}
          isDisabled={isDisabled}
          onClick={handleClickClear}
          isPopoverOpen={state.isPopoverOpen}
          hasFooter={state.hasFooter}
          testy="testy"
        >
          <span dangerouslySetInnerHTML={{ __html: "&times;" }} />
        </RawButtonClearButtonStyled>
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
