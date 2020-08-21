import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import * as types from "./types";
import pillStyles, { pillTextStyles } from "./Pill.styles";

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  pillColor: PropTypes.oneOf([types.All_COLORS, types.All_SEVERITY]),
  size: PropTypes.oneOf(types.LIMITED),
};

const defaultProps = {
  a11yText: null,
  isDisabled: false,
  onClick: null,
  pillColor: types.GREY,
  size: types.MEDIUM,
};

function Pill(props) {
  const { a11yText, pillColor, isDisabled, size, onClick, ...moreProps } = props;

  const styleProps = {
    pillColor,
    size,
  };

  if (onClick) {
    return (
      <RawButton
        css={pillStyles}
        {...styleProps}
        a11yText={a11yText}
        isDisabled={isDisabled}
        onClick={onClick}
        {...moreProps}
      >
        <span css={pillTextStyles}>{props.children}</span>
      </RawButton>
    );
  }

  return (
    <div css={pillStyles} {...styleProps} {...moreProps} data-pka-anchor="pill">
      <span css={pillTextStyles}>{props.children}</span>
    </div>
  );
}

Pill.displayName = "Pill";
Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;
Pill.types = types;

export default Pill;
