import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import isElementContainsFocus from "../../helpers/isElementContainsFocus";
import PopoverContext from "../../PopoverContext";
import { consts as PopoverConstants } from "../../Popover.styles";
import { ContentStyled } from "./Content.styles";

const propTypes = {
  children: PropTypes.node,
  /** Callback to fire to indicate the element loses focus */
  onBlur: PropTypes.func,
};

const defaultProps = {
  children: null,
  onBlur: () => {},
};

const Content = React.forwardRef((props, ref) => {
  const { onBlur, children, ...moreProps } = props;

  const {
    content,
    isEager,
    isOpen,
    isPortal,
    onClose,
    onDelayedClose,
    onDelayedOpen,
    portalElement,
    refContent,
  } = React.useContext(PopoverContext);

  // TODO: extract this to Storybook story somehow so supporting numbers as strings is not required
  function isNumber(n) {
    return RegExp(/^[0-9]+$/).test(n);
  }

  function handleMouseEvent(event) {
    if (!isEager) return;
    if (event.type === "mouseover") {
      onDelayedOpen();
    } else if (event.type === "mouseout") {
      onDelayedClose();
    }
  }

  function handleBlur(event) {
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
        onBlur();
      }
    }, parseInt(PopoverConstants.transition, 10));
  }

  function cssValue(value) {
    return isNumber(value) ? `${value}px` : value;
  }

  const handleRef = _ref => {
    refContent(_ref);
    if (ref) {
      // https://github.com/reactjs/rfcs/blob/master/text/0017-new-create-ref.md#basic-example
      ref.current = _ref; // eslint-disable-line
    }
  };

  const contentStyles = {
    left: content.x,
    top: content.y,
    maxWidth: cssValue(content.maxWidth),
    minWidth: cssValue(content.minWidth),
  };
  if (content.width && content.width !== "auto") {
    contentStyles.width = content.width;
  }

  /* eslint-disable jsx-a11y/mouse-events-have-key-events */
  const ContentStyledComponent = (
    <ContentStyled
      aria-hidden={!isOpen}
      data-component-name="PopoverContent"
      data-pka-anchor="popover.content"
      ref={handleRef}
      id={isEager ? content.ariaId : null}
      isOpen={isOpen}
      onBlur={handleBlur}
      onMouseOut={handleMouseEvent}
      onMouseOver={handleMouseEvent}
      style={contentStyles}
      tabIndex="-1"
      zIndex={content.zIndex}
      {...moreProps}
    >
      {props.children}
    </ContentStyled>
  );

  if (isPortal) {
    return ReactDOM.createPortal(ContentStyledComponent, portalElement);
  }

  return ContentStyledComponent;
});
/* eslint-enable jsx-a11y/mouse-events-have-key-events */

Content.displayName = "Popover.Content";

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
