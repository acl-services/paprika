import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./Avatar.styles";

const propTypes = {
  /** Avatar content. It can be initial as a string or icon */
  children: PropTypes.node,
  /** Background color of the Avatar */
  color: PropTypes.oneOf(["black, blue", "green", "orange", "pink", "red"]),
  /** Size of Avatar */
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
