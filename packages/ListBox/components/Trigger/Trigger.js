import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import Label from "../Label";
import { ListBoxTriggerStyled, TriggerArrowStyled } from "./Trigger.styles";
import useStore from "../../store/useStore";
import * as actionTypes from "../../store/actionTypes";

const propTypes = {
  isMulti: PropTypes.bool.isRequired,
  onClickTrigger: PropTypes.func.isRequired,
  onKeyDownTrigger: PropTypes.func.isRequired,
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

  function handleArrowKeyUp(event) {}

  function handleArrowKeyDown(event) {}

  const {
    renderLabel,
    onClickTrigger,
    onKeyDownTrigger,
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
    onClickTrigger();
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
          onKeyDown={onKeyDownTrigger}
          onKeyUp={() => {}}
          isDisabled={isDisabled}
        >
          <Label
            activeOption={stateProps.options[stateProps.activeOption]}
            isMulti={isMulti}
            options={stateProps.options}
            placeholder={placeholder}
            selectedOptions={stateProps.selectedOptions}
          />
        </RawButton>
      )}
      <TriggerArrowStyled
        isDisabled={isDisabled}
        isOpen={stateProps.isPopoverOpen}
        dangerouslySetInnerHTML={{ __html: "&#x25BC;" }}
      />
    </ListBoxTriggerStyled>
  );
}

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
