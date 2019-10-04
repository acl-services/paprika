import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import { isActiveElementPopover } from "../../helpers/isActiveElementPopover";
import PopoverContext from "../../PopoverContext";

const propTypes = {
  /** Descriptive a11y text for assistive technologies for the trigger. */
  a11yText: PropTypes.string,

  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

const defaultProps = {
  a11yText: null,
};

function Trigger(props) {
  const { isEager, onClick, onClose, onDelayedClose, onDelayedOpen, onOpen, shouldKeepFocus } = React.useContext(
    PopoverContext
  );

  function handleTriggerEvent(event) {
    if (isEager && (event.type === "mouseover" || event.type === "focus")) {
      if (event.type === "mouseover") {
        onDelayedOpen();
      } else {
        onOpen();
      }
    } else if (isEager && event.type === "mouseout") {
      onDelayedClose();
    } else if (shouldKeepFocus && event.type === "blur") {
      window.requestAnimationFrame(() => {
        if (!isActiveElementPopover()) onClose();
      });
    } else if (event.type === "click" || event.key === " " || event.key === "Enter") {
      onClick();
    }
  }

  const { children, a11yText } = props;

  if (typeof children === "function") {
    return <React.Fragment>{children(handleTriggerEvent)}</React.Fragment>;
  }

  /* issue https://github.com/acl-services/paprika/issues/33 */
  if (isEager) {
    return (
      <RawButton
        a11yText={a11yText}
        data-pka-anchor="popover.trigger"
        onMouseOver={handleTriggerEvent}
        onMouseOut={handleTriggerEvent}
        onFocus={handleTriggerEvent}
        onBlur={handleTriggerEvent}
      >
        {children}
      </RawButton>
    );
  }

  return (
    <RawButton
      a11yText={a11yText}
      data-pka-anchor="popover.trigger"
      onClick={handleTriggerEvent}
      onBlur={shouldKeepFocus ? handleTriggerEvent : null}
    >
      {children}
    </RawButton>
  );
}

Trigger.displayName = "Popover.Trigger";

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;

export default Trigger;
