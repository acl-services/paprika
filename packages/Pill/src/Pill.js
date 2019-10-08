import React from "react";
import PropTypes from "prop-types";
import tokens from "@paprika/tokens";
import RawButton from "@paprika/raw-button";
import pillStyles from "./Pill.styles";

export const tokenPillColors = [
  tokens.color.black,
  tokens.color.blackLighten60,
  tokens.color.blue,
  tokens.color.greenDarken10,
  tokens.color.orangeDarken10,
];
export const severityPillColors = ["noRisk", "lowRisk", "mediumRisk", "highRisk"];
export const pillSizes = ["small", "medium"];

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  pillColor: PropTypes.oneOf([...tokenPillColors, ...severityPillColors]),
  size: PropTypes.oneOf(pillSizes),
  textColor: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  isDisabled: false,
  onClick: null,
  pillColor: tokens.color.blackLighten60,
  size: "medium",
  textColor: tokens.color.white,
};

function Pill(props) {
  const { a11yText, pillColor, textColor, isDisabled, size, onClick, ...moreProps } = props;

  const tabIndex = onClick === null ? -1 : 0;

  const styleProps = {
    textColor,
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
        tabIndex={tabIndex}
        {...moreProps}
      >
        {props.children}
      </RawButton>
    );
  }

  return (
    <div css={pillStyles} {...styleProps} tabIndex={tabIndex} {...moreProps}>
      {props.children}
    </div>
  );
}

Pill.displayName = "Pill";
Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default Pill;
