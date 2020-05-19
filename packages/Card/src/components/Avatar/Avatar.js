import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./Avatar.styles";

const propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["black, blue"]),
  size: PropTypes.oneOf(ShirtSizes.LIMITED),
};

const defaultProps = {
  children: "C",
  color: "black",
  size: "medium",
};

function Avatar(props) {
  const { color, children, size } = props;

  const avatarProps = {
    color,
    children,
    size,
  };
  return (
    <sc.Avatar data-pka-anchor="avatar" {...avatarProps}>
      {children}
    </sc.Avatar>
  );
}

Avatar.displayName = "Avatar";
Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
