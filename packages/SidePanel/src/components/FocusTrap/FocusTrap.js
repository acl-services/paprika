import PropTypes from "prop-types";
import { default as FocusTrapLibrary } from "focus-trap-react/dist/focus-trap-react"; // eslint-disable-line

// properties copy from https://github.com/davidtheclark/focus-trap

const propTypes = {
  /** A function that will be called when the focus trap activates. */
  onActivate: PropTypes.func,
  /** A function that will be called when the focus trap deactivates */
  onDeactivate: PropTypes.func,

  /** By default, when a focus trap is activated the first element in the focus trap's tab order will receive focus. With this option you can specify a different element to receive that initial focus. Can be a DOM node, or a selector string (which will be passed to document.querySelector() to find the DOM node), or a function that returns a DOM node. */
  initialFocus: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),

  /**
    By default, an error will be thrown if the focus trap contains no elements in its tab order. With this option you can specify a fallback element to programmatically receive focus if no other tabbable elements are found. For example, you may want a popover's <div> to receive focus if the popover's content includes no tabbable elements. Make sure the fallback element has a negative tabindex so it can be programmatically focused. The option value can be a DOM node, a selector string (which will be passed to document.querySelector() to find the DOM node), or a function that returns a DOM node.
    escapeDeactivates {boolean}: Default: true. If false, the Escape key will not trigger deactivation of the focus trap. This can be useful if you want to force the user to make a decision instead of allowing an easy way out.
  */
  fallbackFocus: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]), //

  /** Default: false. If true, a click outside the focus trap will deactivate the focus trap and allow the click event to do its thing. */
  clickOutsideDeactivates: PropTypes.bool,

  /** Default: true. If false, when the trap is deactivated, focus will not return to the element that had focus before activation. */
  returnFocusOnDeactivate: PropTypes.bool,
};

const defaultProps = FocusTrapLibrary.defaultProps;

// shell component for enhancing UXDeveloper
export default function FocusTrap() {
  return null;
}

FocusTrap.propTypes = propTypes;
FocusTrap.defaultProps = defaultProps;
FocusTrap.componentType = "SidePanel.FocusTrap";
