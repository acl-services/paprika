import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import { isActiveElementPopover } from "../../helpers/isActiveElementPopover";
import PopoverContext from "../../PopoverContext";
import * as sc from "../../Popover.styles";

const propTypes = {
  /** Descriptive a11y text for assistive technologies for the trigger. */
  a11yText: PropTypes.string,

  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

const defaultProps = {
  a11yText: null,
};

function Trigger(props) {
  const {
    content,
    isEager,
    isOpen,
    onClick,
    onClose,
    onDelayedClose,
    onDelayedOpen,
    onOpen,
    shouldKeepFocus,
  } = React.useContext(PopoverContext);

  function handleTriggerEvent(event) {
    if (isEager && (event.type === "mouseover" || event.type === "focus")) {
      if (event.type === "mouseover") {
        onDelayedOpen();
      } else {
        onOpen();
      }
    } else if (isEager && event.type === "mouseout") {
      onDelayedClose();
    } else if ((shouldKeepFocus || isEager) && event.type === "blur") {
      window.requestAnimationFrame(() => {
        if (!isActiveElementPopover()) onClose();
      });
    } else if (event.type === "click" || event.key === " " || event.key === "Enter") {
      onClick(event);
    }
  }

  const { children, a11yText, ...moreProps } = props;

  const tooltipA11yProps = { "aria-describedby": content.ariaId };
  const popoverA11yProps = { "aria-haspopup": true, "aria-controls": content.ariaId, "aria-expanded": true };
  const a11yAttributes = isEager ? tooltipA11yProps : popoverA11yProps;

  if (typeof children === "function") {
    return React.cloneElement(children(handleTriggerEvent, a11yAttributes, isOpen), {
      ...moreProps,
    });
  }

  const commonAttributes = {
    a11yText,
    "data-pka-anchor": "popover.trigger",
    ...a11yAttributes,
  };

  if (isEager) {
    return (
      <sc.Trigger
        {...commonAttributes}
        onMouseOver={handleTriggerEvent}
        onMouseOut={handleTriggerEvent}
        onFocus={handleTriggerEvent}
        onBlur={handleTriggerEvent}
        {...moreProps}
      >
        {children}
      </sc.Trigger>
    );
  }

  return (
    <RawButton
      {...commonAttributes}
      onClick={handleTriggerEvent}
      onBlur={shouldKeepFocus ? handleTriggerEvent : null}
      {...moreProps}
    >
      {children}
    </RawButton>
  );
}

Trigger.displayName = "Popover.Trigger";

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;

export default Trigger;
