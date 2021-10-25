import React from "react";
import memoizeOne from "memoize-one";
import PropTypes from "prop-types";
import throttle from "lodash.throttle";
import { v4 as uuidv4 } from "uuid";
import * as constants from "@paprika/constants/lib/Constants";
import tokens from "@paprika/tokens";
import { zValue } from "@paprika/stylers/lib/helpers";
import { callAll } from "@paprika/helpers";

import * as types from "./types";
import isInsideBoundaries from "./helpers/isInsideBoundaries";
import { getContentCoordinates, getTipCoordinates } from "./helpers/getPosition";
import getBoundingClientRect from "./helpers/getBoundingClientRect";
import PopoverContext, { ThemeContext } from "./PopoverContext";
import Content from "./components/Content/Content";
import Card from "./components/Card/Card";
import Trigger from "./components/Trigger/Trigger";
import Tip from "./components/Tip/Tip";
import * as sc from "./Popover.styles";

const openDelay = 350;
const closeDelay = 150;
const throttleDelay = 20;
const focusableElementSelector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [role="button"]';

// TODO: To handle cases where there are multiple scrolling containers, we need to implement
//       getScrollContainer as oneOfType([func, arrayOf(func)])

class Popover extends React.Component {
  constructor(props) {
    super(props);

    this.hasListeners = false;
    this.$popover = React.createRef();
    this.$trigger = null;
    this.$tip = null; // this ref comes from a callback of the <Tip /> component

    if (props.isPortal) {
      const portalNode = document.createElement("div");
      this.$portal = document.body.appendChild(portalNode);
    }

    this.focusableElements = [];
    this.triggerFocusIndex = null;

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

    this.ariaIdForContent = `popover-content_${uuidv4()}`;
  }

  getContextValues = memoizeOne(
    (
      content,
      maxWidth,
      minWidth,
      width,
      isEager,
      isOpen,
      isPortal,
      portalElement,
      refContent,
      refTip,
      shouldKeepFocus,
      tip,
      zIndex,
      ariaIdForContent,
      handleKeyDown,
      shouldUnmount
    ) => ({
      content: {
        ...content,
        maxWidth,
        minWidth,
        width,
        zIndex,
        ariaId: ariaIdForContent,
      },
      isEager,
      isOpen,
      onClick: this.handleClick,
      onClose: this.handleClose,
      onDelayedClose: this.handleDelayedClose,
      onDelayedOpen: this.handleDelayedOpen,
      onOpen: this.handleOpen,
      onAfterOpen: e => this.handleOnAfterOpen(e),
      isPortal,
      portalElement,
      refContent,
      refTip,
      shouldKeepFocus,
      tip,
      handleKeyDown,
      shouldUnmount,
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

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.isOpen && nextProps.isOpen) {
      return { isOpen: true };
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      this.open();
    }

    if (this.isOpen() && !this.hasListeners) {
      this.focusableElements = document.querySelectorAll(focusableElementSelector);
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

    if (this.props.isPortal) {
      document.body.removeChild(this.$portal);
    }
  }

  getContentWidth() {
    const $shadowContent = this.$content.cloneNode(true);
    $shadowContent.style.visibility = "hidden";
    $shadowContent.style.top = 0;
    $shadowContent.style.left = 0;
    $shadowContent.style.width = "auto";
    $shadowContent.style.maxWidth = this.props.maxWidth;
    $shadowContent.style.minWidth = this.props.minWidth;

    document.body.appendChild($shadowContent);
    const contentWidth = getBoundingClientRect($shadowContent).width;
    document.body.removeChild($shadowContent);

    return contentWidth;
  }

  setVisibilityAndPosition(isOpening = false) {
    if (this.$content) {
      // dynamically setting a fixed width before positioning avoids issues at the
      // right edge of the screen
      if (isOpening && [types.TOP, types.BOTTOM].includes(this.props.align)) {
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
  }

  getCoordinates = () => {
    const { align, edge, getScrollContainer } = this.props;

    const targetRect =
      this.props.getPositioningElement === null
        ? getBoundingClientRect(this.$popover.current)
        : getBoundingClientRect(this.props.getPositioningElement());

    const contentCoords = getContentCoordinates({
      rect: this.$content ? getBoundingClientRect(this.$content) : null,
      targetRect,
      scrollRect: getScrollContainer !== null ? getBoundingClientRect(getScrollContainer()) : null,
      align,
      offset: this.props.offset,
      edge,
    });

    let tipCoords = { x: null, y: null, rotate: null };

    if (this.$tip) {
      tipCoords = getTipCoordinates({
        tipRect: getBoundingClientRect(this.$tip),
        targetRect,
        contentRect: getBoundingClientRect(this.$content),
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
      const scrollContainer = this.props.getScrollContainer === null ? document.body : this.props.getScrollContainer();
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

  handleKeyDown = event => {
    if (event.key === "Escape" && this.isOpen() && this.$trigger) {
      event.stopPropagation();
      this.close();
      this.$trigger.focus();
    } else if (event.key === "Tab" && this.isOpen() && this.$trigger) {
      const isFocusOnFirst = this.focusIsOnCertainElementInPopover("first") || document.activeElement === this.$content;
      const isFocusOnLast = this.focusIsOnCertainElementInPopover("last");
      const isFocusOnOnly =
        (document.activeElement === this.$content &&
          this.$content.querySelectorAll(focusableElementSelector).length) === 0;

      if (event.shiftKey && isFocusOnFirst) {
        event.preventDefault();
        this.focusableElements[this.triggerFocusIndex].focus();
      } else if (!event.shiftKey && (isFocusOnLast || isFocusOnOnly)) {
        event.preventDefault();
        this.focusableElements[this.triggerFocusIndex + 1]?.focus();
      }
    }
  };

  focusIsOnCertainElementInPopover = which => {
    const focusableElementsInPopover = this.$content.querySelectorAll(focusableElementSelector);
    const index = which === "first" ? 0 : focusableElementsInPopover.length - 1;

    return document.activeElement === focusableElementsInPopover[index];
  };

  elementIsDescendentOfPopover = elem => {
    let elementsParent = elem.parentNode;
    while (elementsParent !== null) {
      if (elementsParent.getAttribute && elementsParent.getAttribute("data-pka-anchor") === "popover.content") {
        return true;
      }
      elementsParent = elementsParent.parentNode;
    }
    return false;
  };

  setPopoverTriggerFocusIndex = () => {
    this.focusableElements.forEach((focusableElement, index) => {
      if (focusableElement === this.$trigger) {
        this.triggerFocusIndex = index;
      }
    });
  };

  handleOnAfterOpen = element => {
    if (!this.props.shouldKeepFocus && !this.props.isEager && this.isOpen()) {
      this.setPopoverTriggerFocusIndex();
      element.focus();
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
    if (this.isOpen() && !this.props.shouldKeepFocus && !this.props.isEager) this.close();
    else this.open();
  };

  refTip = ref => {
    this.$tip = ref;
  };

  refContent = ref => {
    this.$content = ref;
  };

  handleChildChange = () => {
    setTimeout(() => {
      this.setVisibilityAndPosition();
    });
  };

  open() {
    this.$trigger = document.activeElement;
    this.setState({ isOpen: true }, () => {
      this.setVisibilityAndPosition(true);
    });
  }

  close() {
    // NOTE: Even if uncontrolled, the app may want to be notified when closed via the onClose callback
    if (this.props.onClose !== null) {
      this.props.onClose();
    }

    if (this.props.isOpen === null) {
      this.setState({ isOpen: false });
      this.removeListeners();
    }
  }

  isOpen() {
    this.focusableElements = document.querySelectorAll(focusableElementSelector);
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
      document.addEventListener("resize", this.handleReposition, false);
      document.addEventListener("scroll", this.handleReposition, false);

      if (this.props.getScrollContainer !== null) {
        this.props.getScrollContainer().addEventListener("scroll", this.handleReposition, false);
      }

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

      this.hasListeners = false;
    }
  }

  render() {
    const {
      align,
      children,
      isDark,
      isEager,
      isOpen,
      isPortal,
      defaultIsOpen,
      maxWidth,
      minWidth,
      onClose,
      offset,
      getPositioningElement,
      getScrollContainer,
      shouldUnmount,
      zIndex,
      ...moreProps
    } = this.props;

    const contextValue = this.getContextValues(
      this.state.content,
      maxWidth,
      minWidth,
      this.state.width,
      isEager,
      this.isOpen(),
      isPortal,
      this.$portal,
      this.refContent,
      this.refTip,
      this.props.shouldKeepFocus,
      this.state.tip,
      zIndex,
      this.ariaIdForContent,
      e => this.handleKeyDown(e),
      shouldUnmount
    );

    return (
      <ThemeContext.Provider value={isDark}>
        <PopoverContext.Provider value={contextValue}>
          <sc.Popover
            data-pka-anchor="popover"
            ref={this.$popover}
            {...moreProps}
            onKeyDown={callAll(this.handleKeyDown, moreProps.onKeyDown)}
          >
            <PopoverChildren onChildChange={this.handleChildChange}>{this.props.children}</PopoverChildren>
          </sc.Popover>
        </PopoverContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

// Todo Refactor this when we convert popover component to use hooks
function PopoverChildren(props) {
  const { children, onChildChange } = props;

  React.useLayoutEffect(() => {
    if (children) onChildChange();
  }, [children, onChildChange]);

  return children;
}

Popover.types = {
  align: constants.align,
};

const propTypes = {
  /** Where the popover content is positioned relative to the trigger or getPositioningElement. */
  align: PropTypes.oneOf([
    Popover.types.align.TOP,
    Popover.types.align.RIGHT,
    Popover.types.align.BOTTOM,
    Popover.types.align.LEFT,
  ]),

  /** Content of the popover */
  children: PropTypes.node.isRequired,

  /** Displays as a "tooltip" style with white text on black background. */
  isDark: PropTypes.bool,

  /** Activated by mouseOver / focus instead of onClick. */
  isEager: PropTypes.bool,

  /** How "controlled" popovers are shown / hidden. */
  isOpen: PropTypes.bool,

  /** This renders the popover inline in the DOM and not in a react portal. WARNING: will have side effects with paprika side panels and modals, use with caution. */
  isPortal: PropTypes.bool,

  /** How "uncontrolled" popovers can be rendered open by default. */
  defaultIsOpen: PropTypes.bool,

  /** Where the edge of the popover content is based on the trigger or getPositioningElement */
  edge: PropTypes.oneOf([Popover.types.align.LEFT, Popover.types.align.RIGHT, null]),

  /** Maximum width of popover content. Using a number is recommended and implies px units. */
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Minimumn width of popover content. Using a number is recommended and implies px units. */
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Callback to fire when user closes popover. */
  onClose: PropTypes.func,

  /** Distance, in px, between popover content edge and trigger / getPositioningElement. */
  offset: PropTypes.number,

  /** Function that provides DOM element to use as target for positioning the popover. */
  getPositioningElement: PropTypes.func,

  /** Function that provides the scrolling DOM element that contains the popover. */
  getScrollContainer: PropTypes.func,

  /** If focus will stay at the trigger when showing popover. Popover can still be closed when clicking outside or pressing escape key. */
  shouldKeepFocus: PropTypes.bool,

  /** Should unmount Popover Content or Tip Subcomponents from DOM when popover is closed */
  shouldUnmount: PropTypes.bool,

  /** Number setting the z-index for the popover content / tip. */
  zIndex: PropTypes.number,
};

const defaultProps = {
  align: Popover.types.align.BOTTOM,
  isDark: false,
  isEager: false,
  isOpen: null,
  isPortal: true,
  defaultIsOpen: null,
  edge: null,
  maxWidth: 320,
  minWidth: 0,
  onClose: null,
  offset: parseInt(tokens.spaceLg, 10),
  getPositioningElement: null,
  getScrollContainer: null,
  shouldKeepFocus: false,
  shouldUnmount: true,
  zIndex: zValue(1),
};

Popover.displayName = "Popover";
Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

Popover.Trigger = Trigger;
Popover.Content = Content;
Popover.Card = Card;
Popover.Tip = Tip;

export default Popover;
