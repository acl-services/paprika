import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import isElementContainsFocus from "../../helpers/isElementContainsFocus";
import PopoverContext from "../../PopoverContext";
import { consts as PopoverConstants } from "../../Popover.styles";
import { ContentStyled } from "./Content.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  zIndex: PropTypes.number,
};

const defaultProps = {
  zIndex: 1,
};

class Content extends React.Component {
  handleMouseEvent = (isEager, onDelayedClose, onDelayedOpen) => event => {
    if (!isEager) return;
    if (event.type === "mouseover") {
      onDelayedOpen();
    } else if (event.type === "mouseout") {
      onDelayedClose();
    }
  };

  handleBlur = onClose => event => {
    // onblur canceling onclick the following happens when:
    // Clicking twice the trigger button (open, close), will fire an onclick and onblur event
    // creating a race condition nullyfing the onClick and keeping the popover open
    // https://stackoverflow.com/questions/121499/when-a-blur-event-occurs-how-can-i-find-out-which-element-focus-went-to
    // the previous link answer suggested the use of the mouseDown event, thought, that will kill all accessibility of onClick,
    // as well will affect the devUX when you want to have a controlled Popover forcing the use of mouseDown event instead of onClick

    // Solution https://stackoverflow.com/a/121708/196038
    // Use timeout to delay examination of activeElement until after blur/focus
    // events have been processed.

    const currentTarget = event.currentTarget;
    setTimeout(() => {
      if (!isElementContainsFocus(currentTarget)) {
        onClose();
      }
    }, parseInt(PopoverConstants.transition, 10));
  };

  // TODO: extract this to Storybook story somehow so supporting numbers as strings is not required
  isNumber = n => RegExp(/^[0-9]+$/).test(n);

  render() {
    return (
      <PopoverContext.Consumer>
        {({ content, isEager, isOpen, onClose, onDelayedClose, onDelayedOpen, portalElement, refContent }) => {
          const contentStyles = {
            left: content.x,
            maxWidth: this.isNumber(content.maxWidth) ? `${content.maxWidth}px` : content.maxWidth,
            top: content.y,
            width: content.width,
          };

          const handler = this.handleMouseEvent(isEager, onDelayedClose, onDelayedOpen);

          /* eslint-disable jsx-a11y/mouse-events-have-key-events */
          /*
            NOTE: we are missing onFocus, which affect the use of the keyboard
            accessibility, I'm adding a issue https://github.com/acl-services/paprika/issues/33
            so we can address this later.
          */
          return ReactDOM.createPortal(
            <ContentStyled
              aria-hidden={!isOpen}
              data-component-name="PopoverContent"
              data-qa-anchor="popover-content"
              ref={refContent}
              isOpen={isOpen}
              onBlur={this.handleBlur(onClose)}
              onMouseOut={handler}
              onMouseOver={handler}
              style={contentStyles}
              tabIndex={isOpen ? 0 : -1}
              zIndex={this.props.zIndex}
            >
              {this.props.children}
            </ContentStyled>,
            portalElement
          );
        }}
      </PopoverContext.Consumer>
    );
  }
}

Content.displayName = "Popover.Content";

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
