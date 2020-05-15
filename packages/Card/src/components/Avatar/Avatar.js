import React from "react";
import PropTypes from "prop-types";
import avatarStyles from "./Avatar.styles";

const propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["black, blue"]),
};

const defaultProps = {
  children: "C",
  color: "black",
};

function Avatar(props) {
  const { color, children } = props;

  const avatarProps = {
    color,
    children,
  };
  return (
    <span data-pka-anchor="avatar" css={avatarStyles} {...avatarProps}>
      {children}
    </span>
  );
}

Avatar.displayName = "Avatar";
Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
