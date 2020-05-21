import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./Avatar.styles";

const propTypes = {
  /** Avatar content. It can be initial as a string or icon */
  children: PropTypes.node,
  /** Background color of the Avatar */
  color: PropTypes.oneOf(["black", "blue", "green", "orange", "pink", "red"]),
  /** Randomize background color */
  isRandomBackground: PropTypes.bool,
  /** Size of Avatar */
  size: PropTypes.oneOf(ShirtSizes.LIMITED),
};

const defaultProps = {
  children: "C",
  color: "black",
  isRandomBackground: false,
  size: "medium",
};

function Avatar(props) {
  const { color, children, isRandomBackground, size } = props;

  const avatarProps = {
    color,
    children,
    isRandomBackground,
    size,
  };

  if (isRandomBackground) {
    const colors = ["black", "blue", "green", "orange", "pink", "red"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    avatarProps.color = randomColor;
  }

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
