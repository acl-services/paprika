import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./Avatar.styles";

Avatar.propTypes = propTypes; // eslint-disable-line no-use-before-define
// eslint-disable-next-line no-use-before-define
Avatar.types = {
  size: constants.limitedSize,
};
Avatar.defaultProps = defaultProps; // eslint-disable-line no-use-before-define

const propTypes = {
  /** Avatar content. It can be initial as a string or icon */
  children: PropTypes.node,
  /** Background color of the Avatar */
  backgroundColor: PropTypes.string,
  /** Color for the initial or icon */
  color: PropTypes.string,
  /** Size of Avatar */
  /* eslint-disable-next-line no-use-before-define */
  size: PropTypes.oneOf([Avatar.types.size.SMALL, Avatar.types.size.MEDIUM]),
};

const defaultProps = {
  backgroundColor: null,
  children: null,
  color: null,
  size: Avatar.types.MEDIUM, // eslint-disable-line no-use-before-define
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

export default Avatar;
