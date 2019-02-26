import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import Label from "../Label";
import handleKeyboardKeys from "../../helpers/handleKeyboardKeys";
import { ListBoxTriggerStyled, TriggerArrowStyled } from "./Trigger.styles";
import useStore from "../../store/useStore";
import * as actionTypes from "../../store/actionTypes";

const propTypes = {
  isMulti: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  refTrigger: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  refTriggerContainer: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  renderLabel: PropTypes.func,
  renderLabelProps: PropTypes.any,
  set: PropTypes.any,
  state: PropTypes.any,
};

const defaultProps = {
  renderLabel: null,
};

export default function Trigger(props) {
  const [state, dispatch] = useStore();
  const {
    renderLabel,
    refTriggerContainer,
    refTrigger,
    renderLabelProps,
    state: stateProps,
    set,
    isMulti,
    placeholder,
  } = props;

  const { isDisabled } = state;

  const handleClick = () => {
    if (isDisabled) {
      return;
    }

    dispatch({ type: actionTypes.togglePopover });
    // onClickTrigger();
  };

  return (
    <ListBoxTriggerStyled isDisabled={isDisabled} ref={refTriggerContainer}>
      {renderLabel ? (
        renderLabel(renderLabelProps, stateProps, set)
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
      <TriggerArrowStyled
        isDisabled={isDisabled}
        isOpen={state.isPopoverOpen}
        dangerouslySetInnerHTML={{ __html: "&#x25BC;" }}
      />
    </ListBoxTriggerStyled>
  );
}

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
