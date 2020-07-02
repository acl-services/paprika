import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./Avatar.styles";

const propTypes = {
  /** Avatar content. It can be initial as a string or icon */
  children: PropTypes.node,
  /** Background color of the Avatar */
  backgroundColor: PropTypes.string,
  /** Color for the initial or icon */
  color: PropTypes.string,
  /** Size of Avatar */
  size: PropTypes.oneOf(ShirtSizes.LIMITED),
};

const defaultProps = {
  backgroundColor: null,
  children: null,
  color: null,
  size: "medium",
};

function Avatar(props) {
  const { backgroundColor, size, color, children, ...moreProps } = props;

  const getInitial = children => {
    return children.substring(0, 1).toUpperCase();
  };

  return (
    <sc.Avatar data-pka-anchor="avatar" $backgroundColor={backgroundColor} $color={color} size={size} {...moreProps}>
      {typeof children === "string" ? getInitial(children) : children}
    </sc.Avatar>
  );
}

Avatar.displayName = "Avatar";
Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
