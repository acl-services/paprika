import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "../helpers/customPropTypes";
import { ButtonStyled, RawButtonStyled } from "./Button.styles";

const propTypes = {
  a11yText: PropTypes.string,
  buttonRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  canPropagate: PropTypes.bool,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isSemantic: PropTypes.bool,
  isSubmit: PropTypes.bool,
  kind: PropTypes.oneOf(["default", "primary", "secondary", "destructive", "flat", "minor", "link"]),
  onClick: PropTypes.func,
  role: PropTypes.string,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
  tabIndex: PropTypes.number,
};

const defaultProps = {
  a11yText: null,
  buttonRef: null,
  canPropagate: true,
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isSemantic: true,
  isSubmit: false,
  kind: "default",
  onClick: () => {},
  role: "button",
  size: "medium",
  tabIndex: 0,
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.setRef(props);
  }

  componentDidUpdate() {
    this.setRef(this.props);
  }

  setRef(props) {
    this.$button = props.buttonRef || React.createRef();
  }

  handleClick = event => {
    if (!this.props.canPropagate) event.stopPropagation();
    if (!this.props.isDisabled) this.props.onClick(event);
  };

  render() {
    const {
      a11yText,
      buttonRef,
      canPropagate,
      children,
      isDisabled,
      isSemantic,
      isSubmit,
      tabIndex,
      ...moreProps
    } = this.props;
    if (a11yText) moreProps["aria-label"] = a11yText;

    const buttonProps = {
      isDisabled,
      onClick: this.handleClick,
      ref: this.$button,
      tabIndex,
      ...moreProps,
    };

    if (isSemantic) {
      buttonProps.disabled = isDisabled;
      buttonProps.type = isSubmit ? "submit" : "button";
    } else {
      buttonProps.tabIndex = isDisabled ? -1 : tabIndex;
    }

    const ButtonTag = isSemantic ? ButtonStyled : RawButtonStyled;

    return <ButtonTag {...buttonProps}>{children}</ButtonTag>;
  }
}

Button.displayName = "Button";
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
