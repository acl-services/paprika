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
  canPropagate: true,
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

  setRef(props) {
    this.$rawButton = props.buttonRef || React.createRef();
  }

  handleKeyDown = event => {
    if (
      // Prevent scrolling the page with a spacerbar keypress
      event.key === " " ||
      // Prevent submitting forms in IE/Edge with and enter keypress
      event.key === "Enter"
    ) {
      event.preventDefault();
    }
  };

  handleKeyUp = event => {
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
    const { ariaText, buttonRef, canPropagate, children, isDisabled, tabIndex, ...moreProps } = this.props;
    if (ariaText) moreProps["aria-label"] = ariaText;

    return (
      <RawButtonStyled
        aria-disabled={isDisabled}
        innerRef={this.$rawButton}
        isDisabled={isDisabled}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        tabIndex={isDisabled ? -1 : tabIndex}
        {...moreProps}
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
