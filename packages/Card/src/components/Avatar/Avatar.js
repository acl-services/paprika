import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./Avatar.styles";

const propTypes = {
  /** Avatar content. It can be initial as a string or icon */
  children: PropTypes.node,
  /** Background color of the Avatar */
  backgroundColor: PropTypes.string.isRequired,
  /** Color for the initial or icon */
  color: PropTypes.string.isRequired,
  /** Size of Avatar */
  size: PropTypes.oneOf(ShirtSizes.LIMITED),
};

const defaultProps = {
  children: null,
  size: "medium",
};

function Avatar(props) {
  const { backgroundColor, children, size, color } = props;

  const avatarProps = {
    backgroundColor,
    children,
    size,
    color,
  };

  return (
    <sc.Avatar
      style={{ backgroundColor: avatarProps.backgroundColor, color: avatarProps.color }}
      data-pka-anchor="avatar"
      {...avatarProps}
    >
      {children}
    </sc.Avatar>
  );
}

Avatar.displayName = "Avatar";
Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
