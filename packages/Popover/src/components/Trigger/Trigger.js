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

class Trigger extends React.Component {
  handleTriggerEvent = (isEager, onClick, onClose, onDelayedClose, onDelayedOpen, onOpen, shouldKeepFocus) => event => {
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
  };

  render() {
    const { a11yText, children } = this.props;

    return (
      <PopoverContext.Consumer>
        {({ isEager, onClick, onClose, onDelayedClose, onDelayedOpen, onOpen, shouldKeepFocus }) => {
          const handler = this.handleTriggerEvent(
            isEager,
            onClick,
            onClose,
            onDelayedClose,
            onDelayedOpen,
            onOpen,
            shouldKeepFocus
          );

          if (typeof children !== "function") {
            /* issue https://github.com/acl-services/paprika/issues/33 */
            return isEager ? (
              <RawButton
                a11yText={a11yText}
                data-qa-anchor="popover-trigger"
                onMouseOver={handler}
                onMouseOut={handler}
                onFocus={handler}
                onBlur={handler}
              >
                {children}
              </RawButton>
            ) : (
              <RawButton
                a11yText={a11yText}
                data-qa-anchor="popover-trigger"
                onClick={handler}
                onBlur={shouldKeepFocus ? handler : null}
              >
                {children}
              </RawButton>
            );
          }

          return this.props.children(handler);
        }}
      </PopoverContext.Consumer>
    );
  }
}

Trigger.displayName = "Popover.Trigger";

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;

export default Trigger;
