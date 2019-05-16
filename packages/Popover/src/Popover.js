import React from "react";
import memoizeOne from "memoize-one";
import PropTypes from "prop-types";
import throttle from "lodash.throttle";
import tokens from "@paprika/tokens";
import isInsideBoundaries from "./helpers/isInsideBoundaries";
import { getContentCoordinates, getTipCoordinates } from "./helpers/getPosition";
import { isActiveElementPopover } from "./helpers/isActiveElementPopover";

import Content from "./components/Content/Content";
import Card from "./components/Card/Card";
import Trigger from "./components/Trigger/Trigger";
import Tip from "./components/Tip/Tip";

import PopoverStyled from "./Popover.styles";

// ACCESSIBILITY
// NOTE: When closing the popover seems to be better to focus the trigger button
//       only when the close method is the ESC key, when clicking outside doesn't feel a fluid action
//       assigning the focus to the button again

export const PopoverContext = React.createContext();

const openDelay = 350;
const closeDelay = 150;
const throttleDelay = 20;

// TODO: To handle cases where there are multiple scrolling containers, we need to implement
//       getScrollContainer as oneOfType([func, arrayOf(func)])

// TODO: To accommodate cases like a popover menu, we need two additional alignment options:
//       leftEdge and rightEdge.

const propTypes = {
  /** Where the popover content is positioned relative to the trigger or getPositioningElement. */
  align: PropTypes.oneOf(["top", "right", "bottom", "left"]),

  /** Content of the popover */
  children: PropTypes.node.isRequired,

  /** Displays as a "tooltip" style with white text on black background. */
  isDark: PropTypes.bool,

  /** Activated by mouseOver / focus instead of onClick. */
  isEager: PropTypes.bool,

  /** How "controlled" popovers are shown / hidden. */
  isOpen: PropTypes.bool,

  /** How "uncontrolled" popovers can be rendered open by default. */
  defaultIsOpen: PropTypes.bool,

  /** Maximum width of popover content. Use of a number will imply px units and is recommended. */
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Callback to fire when user closes popover. */
  onClose: PropTypes.func,

  /** Distance, in px, between popover content edge and trigger / getPositioningElement. */
  offset: PropTypes.number,

  /** Function that provides DOM element to use as target for positioning the popover. */
  getPositioningElement: PropTypes.func,

  /** Function that provides the scrolling DOM element that contains the popover. */
  getScrollContainer: PropTypes.func,

  /** If this value is true, focus will stay at the trigger when showing popover, and only can be closed when clicking outside or pressing escape key . Default is false. */
  shouldKeepFocus: PropTypes.bool,
};

const defaultProps = {
  align: "bottom",
  isDark: false,
  isEager: false,
  isOpen: null,
  defaultIsOpen: null,
  maxWidth: 320,
  onClose: null,
  offset: parseInt(tokens.spaceLg, 10),
  getPositioningElement: null,
  getScrollContainer: null,
  shouldKeepFocus: false,
};

class Popover extends React.Component {
  constructor(props) {
    super(props);

    this.hasListeners = false;
    this.$popover = React.createRef();
    this.$trigger = null;
    this.$tip = null; // this ref comes from a callback of the <Tip /> component

    const portalNode = document.createElement("div");
    // portalNode.setAttribute("data-paprika-type", "Popover");
    this.$portal = document.body.appendChild(portalNode);

    this.state = {
      isOpen: this.props.defaultIsOpen || false,
      tip: {
        x: 0,
        y: 0,
      },
      content: {
        x: 0,
        y: 0,
      },
      width: "auto",
    };

    // NOTE: should we created a link explaining more deeply this kind of errors?
    //       this type of validation should live in the constructor or somewhere else?

    if (props.isOpen !== null && props.defaultIsOpen !== null) {
      console.error(
        `The use of defaultIsOpen prop is for uncontrolled components only and cannot be used when
        isOpen prop is also provided.`
      );
    }

    if (props.isOpen !== null && props.onClose === null) {
      console.error("This Popover is controlled by its isOpen prop but no onClose prop was provided.");
    }
  }

  getContextValues = memoizeOne(
    (content, maxWidth, width, isDark, isEager, isOpen, portalElement, refContent, refTip, shouldKeepFocus, tip) => ({
      content: {
        ...content,
        maxWidth, // maybe we should code a minimum maxWidth?
        width,
      },
      isDark,
      isEager,
      isOpen,
      onClick: this.handleClick,
      onClose: this.handleClose,
      onDelayedClose: this.handleDelayedClose,
      onDelayedOpen: this.handleDelayedOpen,
      onOpen: this.handleOpen,
      portalElement,
      refContent,
      refTip,
      shouldKeepFocus,
      tip,
    })
  );

  componentDidMount() {
    // about setState for Popovers and Tooltips in ComponentDidMount
    // https://reactjs.org/docs/react-component.html#componentdidmount

    if (this.isOpen()) {
      this.addListeners();
      this.setVisibilityAndPosition();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.isOpen() && !this.hasListeners) {
      this.addListeners();
    }

    if (this.isOpen() && prevProps !== this.props) this.setVisibilityAndPosition();
  }

  componentWillUnmount() {
    this.removeListeners();

    clearTimeout(this.openTimer);
    this.openTimer = null;
    clearTimeout(this.closeTimer);
    this.closeTimer = null;

    document.body.removeChild(this.$portal);
  }

  getContentWidth() {
    const $shadowContent = this.$content.cloneNode(true);
    $shadowContent.style.visibility = "hidden";
    $shadowContent.style.top = 0;
    $shadowContent.style.left = 0;
    $shadowContent.style.width = "auto";
    $shadowContent.style.maxWidth = this.props.maxWidth;

    document.body.appendChild($shadowContent);
    const contentWidth = $shadowContent.getBoundingClientRect().width;
    document.body.removeChild($shadowContent);

    return contentWidth;
  }

  setVisibilityAndPosition(isOpening = false) {
    // dynamically setting a fixed width before positioning avoids issues at the
    // right edge of the screen
    if (isOpening && ["top", "bottom"].includes(this.props.align)) {
      const newWidth = this.getContentWidth();
      if (newWidth !== this.state.width) {
        this.setState({ width: newWidth }, () => {
          this.updateVisibilityAndPositionState(isOpening);
        });
        return;
      }
    }

    this.updateVisibilityAndPositionState(isOpening);
  }

  getCoordinates = () => {
    const { align, getScrollContainer } = this.props;

    const targetRect =
      this.props.getPositioningElement === null
        ? this.$popover.current.getBoundingClientRect()
        : this.props.getPositioningElement().getBoundingClientRect();

    const contentCoords = getContentCoordinates({
      rect: this.$content.getBoundingClientRect(),
      targetRect,
      scrollRect: getScrollContainer !== null ? getScrollContainer().getBoundingClientRect() : null,
      align,
      offset: this.props.offset,
    });

    let tipCoords = { x: null, y: null, rotate: null };

    if (this.$tip) {
      tipCoords = getTipCoordinates({
        tipRect: this.$tip.getBoundingClientRect(),
        targetRect,
        contentRect: this.$content.getBoundingClientRect(),
        contentCoords,
        align,
      });
    }

    return {
      tip: tipCoords,
      content: contentCoords,
    };
  };

  // eslint is forcing to put handleReposition before ComponentDidMount
  // eslint-disable-next-line react/sort-comp
  handleReposition = throttle(() => {
    if (this.isOpen()) {
      const scrollContainer =
        this.props.getScrollContainer === null ? document.documentElement : this.props.getScrollContainer();
      if (
        !isInsideBoundaries({
          $container: scrollContainer,
          $element: this.$popover.current,
          align: this.props.align,
        })
      ) {
        this.close();
        return;
      }
      this.setVisibilityAndPosition();
    }
  }, throttleDelay);

  handleKeyUp = event => {
    if (event.key === "Escape") {
      this.close();
      this.$trigger.focus();
    }
  };

  handleTransitionEnd = event => {
    // NOTE: do this should make more that only focus the content div? should as well
    //       find the first focusable element like button, input, etc?
    //       can focus automatically
    //       should we set focus into the popover content automatically?
    if (!this.props.shouldKeepFocus && this.isOpen() && event.propertyName === "visibility") {
      event.target.focus();
    }
  };

  handleOpen = () => {
    this.open();
  };

  handleClose = () => {
    this.close();
  };

  handleDelayedOpen = () => {
    clearTimeout(this.closeTimer);
    this.openTimer = setTimeout(this.handleOpen, openDelay);
  };

  handleDelayedClose = () => {
    clearTimeout(this.openTimer);
    this.closeTimer = setTimeout(this.handleClose, closeDelay);
  };

  handleClick = () => {
    if (this.isOpen() && !this.props.shouldKeepFocus) this.close();
    else this.open();
  };

  refTip = ref => {
    this.$tip = ref;
  };

  refContent = ref => {
    this.$content = ref;
  };

  open() {
    this.$trigger = document.activeElement;

    this.setVisibilityAndPosition(true);
  }

  close() {
    // NOTE: Even if uncontrolled, the app may want to be notified when closed via the onClose callback
    if (this.props.onClose !== null) this.props.onClose();

    if (this.props.isOpen === null) {
      this.setState({ isOpen: false });

      // NOTE: If we don't prevent the focusing back to the trigger while using focus and mouseover prop
      //       will created a bug looping over opening and closing constantly.
      if (!this.props.shouldKeepFocus && !this.props.isEager && this.$trigger && !isActiveElementPopover()) {
        this.$trigger.focus();
      }
      this.removeListeners();
    }
  }

  isOpen() {
    return this.props.isOpen !== null ? this.props.isOpen : this.state.isOpen;
  }

  updateVisibilityAndPositionState(isOpening = false) {
    const { content, tip } = this.getCoordinates();

    const newState = {
      content,
      tip,
    };

    if (isOpening) newState.isOpen = true;

    this.setState(newState);
  }

  addListeners() {
    if (this.$content) {
      document.addEventListener("keyup", this.handleKeyUp, false);
      document.addEventListener("resize", this.handleReposition, false);
      document.addEventListener("scroll", this.handleReposition, false);

      if (this.props.getScrollContainer !== null) {
        this.props.getScrollContainer().addEventListener("scroll", this.handleReposition, false);
      }

      this.$content.addEventListener("transitionend", this.handleTransitionEnd, false);

      this.hasListeners = true;
    }
  }

  removeListeners() {
    if (this.$content) {
      document.removeEventListener("resize", this.handleReposition);

      if (this.props.getScrollContainer === null) {
        document.removeEventListener("scroll", this.handleReposition);
      } else {
        this.props.getScrollContainer().removeEventListener("scroll", this.handleReposition);
      }

      document.removeEventListener("keyup", this.handleKeyUp);

      this.$content.removeEventListener("transitionend", this.handleTransitionEnd);
      this.hasListeners = false;
    }
  }

  render() {
    const contextValue = this.getContextValues(
      this.state.content,
      this.props.maxWidth,
      this.state.width,
      this.props.isDark,
      this.props.isEager,
      this.isOpen(),
      this.$portal,
      this.refContent,
      this.refTip,
      this.props.shouldKeepFocus,
      this.state.tip
    );

    return (
      <PopoverContext.Provider value={contextValue}>
        <PopoverStyled ref={this.$popover}>{this.props.children}</PopoverStyled>
      </PopoverContext.Provider>
    );
  }
}

Popover.displayName = "Popover";

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

Popover.Trigger = Trigger;
Popover.Content = Content;
Popover.Card = Card;
Popover.Tip = Tip;

export default Popover;
