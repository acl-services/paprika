import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./Button.styles";

function Button(props) {
  const { children, size, kind, ...moreProps } = props;

  const styleProps = {
    size,
    kind,
  };

  return (
    <sc.Button data-pka-anchor="button" data-pka-size={size} {...styleProps} {...moreProps}>
      {children}
    </sc.Button>
  );
}

Button.types = {
  size: constants.autoSize,
  kind: constants.kind,
};

const propTypes = {
  /** Body content of the button. */
  children: PropTypes.node,

  /** Size of the Button (font size, min-height, padding, etc). */
  size: PropTypes.oneOf([Button.types.size.MEDIUM, Button.types.size.LARGE]),

  /** The visual style of the button. */
  kind: PropTypes.oneOf([
    Button.types.kind.DEFAULT,
    Button.types.kind.PRIMARY,
    Button.types.kind.SECONDARY,
    Button.types.kind.DESTRUCTIVE,
    Button.types.kind.FLAT,
    Button.types.kind.MINOR,
    Button.types.kind.LINK,
  ]),
};

const defaultProps = {
  children: null,
  size: Button.types.size.MEDIUM,
  kind: Button.types.kind.DEFAULT,
};

Button.displayName = "Button";
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
