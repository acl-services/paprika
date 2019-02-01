/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* es-lint is disabled for these specific reasons:
  1. Click-events-have-key-events: we are not using React synthetic events because we can't
    deal with the event.stopPropagation of the spacebar and prevent scrolling the page when the user
    presses the space bar.
  2. no-static-element-interactions: It's highly recommended to not use DIV or SPAN for interactive
    elements but in this very specific case we are trying to isolate and mimic the button role
    for icon buttons, arrow icons, carets, and any other elements that are interactive but
    not a button. We are doing this because using a <button /> normally inherents css styling
    from frameworks such as bootstrap or foundation, so in this way we always have a
    fresh button with no style attached.
 */

import React from "react";
import PropTypes from "prop-types";

import RawButtonStyled from "./RawButton.styles";

const propTypes = {
  ariaText: PropTypes.string,
  buttonRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  canPropagate: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  role: PropTypes.string,
};

const defaultProps = {
  ariaText: null,
  buttonRef: null,
  canPropagate: false,
  className: null,
  isDisabled: false,
  onClick: () => {},
  role: "button",
  tabIndex: 0,
};

class RawButton extends React.Component {
  constructor(props) {
    super(props);
    this.setRef(props);
  }

  componentDidUpdate() {
    this.setRef(this.props);
  }

  componentDidMount() {
    if (this.$rawButton) {
      this.$rawButton.current.addEventListener("keydown", this.handleKeyDown);
      this.$rawButton.current.addEventListener("keyup", this.handleKeyUp);
    }
  }

  componentWillUnmount() {
    if (this.$rawButton) {
      this.$rawButton.current.removeEventListener("keydown", this.handleKeyDown);
      this.$rawButton.current.removeEventListener("keyup", this.handleKeyUp);
    }
  }

  setRef(props) {
    this.$rawButton = props.buttonRef || React.createRef();
  }

  handleKeyDown = event => {
    if (
      // Prevent scrolling the page with a spacerbar keypress
      (event.key === " " && event.target.tagName.toLowerCase() !== "input") ||
      // Prevent submitting forms in IE/Edge with and enter keypress
      event.key === "Enter"
    ) {
      event.preventDefault();
    }
  };

  handleKeyUp = event => {
    if (
      // Prevent scrolling the page with a spacerbar keypress
      event.key === " " &&
      event.target.tagName.toLowerCase() !== "input"
    ) {
      event.preventDefault();
    }
    if (this.props.isDisabled || (!this.props.canPropagate && event.target !== this.$rawButton.current)) {
      return;
    }
    if (event.key === " " || event.key === "Enter") {
      this.props.onClick(event);
    }
  };

  handleClick = event => {
    if (!this.props.canPropagate) event.stopPropagation();
    if (!this.props.isDisabled) this.props.onClick(event);
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { ariaText, buttonRef, canPropagate, children, isDisabled, tabIndex, ...moreProps } = this.props;
    if (ariaText) moreProps["aria-label"] = ariaText;

    return (
      <RawButtonStyled
        {...moreProps}
        aria-disabled={isDisabled}
        data-paprika-type="RawButton"
        innerRef={this.$rawButton}
        isDisabled={isDisabled}
        onClick={this.handleClick}
        tabIndex={isDisabled ? -1 : tabIndex}
      >
        {children}
      </RawButtonStyled>
    );
  }
}

RawButton.displayName = "RawButton";

RawButton.propTypes = propTypes;
RawButton.defaultProps = defaultProps;

export default RawButton;
