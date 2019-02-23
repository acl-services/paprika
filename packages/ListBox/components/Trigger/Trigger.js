import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import Label from "../Label";
import { ListBoxTriggerStyled, TriggerArrowStyled } from "../../ListBox.styles";

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
  const {
    renderLabel,
    onClickTrigger,
    onKeyDownTrigger,
    refTriggerContainer,
    refTrigger,
    renderLabelProps,
    state,
    set,
    isMulti,
    placeholder,
  } = props;

  return (
    <ListBoxTriggerStyled ref={refTriggerContainer}>
      {renderLabel ? (
        renderLabel(renderLabelProps, state, set)
      ) : (
        <RawButton
          type="button"
          onClick={onClickTrigger}
          ref={refTrigger}
          onKeyDown={onKeyDownTrigger}
          onKeyUp={() => {}}
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
      <TriggerArrowStyled isOpen={state.isPopoverOpen} dangerouslySetInnerHTML={{ __html: "&#x25BC;" }} />
    </ListBoxTriggerStyled>
  );
}

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
