import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./Avatar.styles";

function Avatar(props) {
  const { backgroundColor, size, color, children, isRound, ...moreProps } = props;

  if (!isRound && size === Avatar.types.size.SMALL) {
    console.warn(
      `In @paprika/${Avatar.displayName} component, the size="SMALL" should only be used when isRound={true}`
    );
  }

  return (
    <sc.Avatar
      data-pka-anchor="avatar"
      $backgroundColor={backgroundColor}
      $color={color}
      size={size}
      isRound={isRound}
      {...moreProps}
    >
      {children}
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
    Avatar.types.size.SMALL, // for use with isRound only
    Avatar.types.size.MEDIUM,
    Avatar.types.size.LARGE,
  ]),
};

const defaultProps = {
  backgroundColor: null,
  children: null,
  color: null,
  isRound: false,
  size: Avatar.types.size.LARGE,
};

Avatar.displayName = "Avatar";
Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;
export default Avatar;
