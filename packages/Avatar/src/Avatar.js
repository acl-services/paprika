import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./Avatar.styles";

function Avatar(props) {
  const { backgroundColor, size, color, children, isRound, ...moreProps } = props;

  if (!isRound && size === Avatar.types.size.LARGE) {
    console.warn(
      `In @paprika/${Avatar.displayName} component, the size="LARGE" should only be used when isRound={true}`
    );
  }

  const getInitials = (isRound, children) => {
    const initials = children.split(" ").map(word => word.charAt(0).toUpperCase());
    return isRound && initials.length > 1 ? `${initials[0]}${initials[1]}` : initials[0];
  };

  return (
    <sc.Avatar
      data-pka-anchor="avatar"
      $backgroundColor={backgroundColor}
      $color={color}
      size={size}
      isRound={isRound}
      {...moreProps}
    >
      {typeof children === "string" ? getInitials(isRound, children) : children}
    </sc.Avatar>
  );
}

Avatar.types = {
  size: constants.defaultSize,
};

const propTypes = {
  /** Avatar content. It can be initial as a string or icon */
  children: PropTypes.node,
  /** Background color of the Avatar */
  backgroundColor: PropTypes.string,
  /** Color for the initial or icon */
  color: PropTypes.string,
  /** Shape of the Avatar */
  isRound: PropTypes.bool,
  /** Size of Avatar */
  size: PropTypes.oneOf([
    Avatar.types.size.SMALL,
    Avatar.types.size.MEDIUM,
    Avatar.types.size.LARGE, // for use with isRound only
  ]),
};

const defaultProps = {
  backgroundColor: null,
  children: null,
  color: null,
  isRound: false,
  size: Avatar.types.size.MEDIUM,
};

Avatar.displayName = "Avatar";
Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;
export default Avatar;
