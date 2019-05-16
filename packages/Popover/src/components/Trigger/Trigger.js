import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";

import { PopoverContext } from "../../Popover";
import { isActiveElementPopover } from "../../helpers/isActiveElementPopover";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
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
    } else if (event.type === "click") {
      onClick();
    }
  };

  render() {
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

          if (typeof this.props.children !== "function") {
            /* issue https://github.com/acl-services/paprika/issues/33 */
            return isEager ? (
              <RawButton
                data-qa-anchor="popover-trigger"
                onMouseOver={handler}
                onMouseOut={handler}
                onFocus={handler}
                onBlur={handler}
              >
                {this.props.children}
              </RawButton>
            ) : (
              <RawButton data-qa-anchor="popover-trigger" onClick={handler} onBlur={shouldKeepFocus ? handler : null}>
                {this.props.children}
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

export default Trigger;
