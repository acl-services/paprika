import React, { Component } from "react";
import { node, func, oneOfType } from "prop-types";
import RawButton from "@paprika/rawbutton";

import { PopoverContext } from "../../Popover";

const propTypes = {
  children: oneOfType([func, node]).isRequired,
};

export default class Trigger extends Component {
  handleTriggerEvent = (isEager, isOpen, onClick, onDelayedClose, onDelayedOpen, onOpen) => event => {
    if (isEager && (event.type === "mouseover" || event.type === "focus")) {
      if (event.type === "mouseover") {
        onDelayedOpen();
      } else {
        onOpen();
      }
    } else if (isEager && event.type === "mouseout") {
      onDelayedClose();
    } else if (event.type === "click") {
      onClick();
    }
  };

  render() {
    return (
      <PopoverContext.Consumer>
        {({ isEager, isOpen, onClick, onDelayedClose, onDelayedOpen, onOpen }) => {
          const handler = this.handleTriggerEvent(isEager, isOpen, onClick, onDelayedClose, onDelayedOpen, onOpen);

          if (typeof this.props.children !== "function") {
            /* issue https://github.com/acl-services/paprika/issues/33 */
            /* eslint-disable jsx-a11y/mouse-events-have-key-events */
            return isEager ? (
              <RawButton
                qaAnchor="paprika-popover--trigger"
                onMouseOver={handler}
                onMouseOut={handler}
                onFocus={handler}
                onBlur={handler}
              >
                {this.props.children}
              </RawButton>
            ) : (
              <RawButton data-qa-anchor="popover-trigger" onClick={handler} tabIndex={0} role="button">
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
