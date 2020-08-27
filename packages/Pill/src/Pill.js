import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import RawButton from "@paprika/raw-button";
import * as types from "./types";
import pillStyles, { pillTextStyles } from "./Pill.styles";

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  pillColor: PropTypes.oneOf([
    [
      Pill.types.color.BLACK, // eslint-disable-line no-use-before-define
      Pill.types.color.BLUE, // eslint-disable-line no-use-before-define
      Pill.types.color.GREEN, // eslint-disable-line no-use-before-define
      Pill.types.color.GREY, // eslint-disable-line no-use-before-define
      Pill.types.color.ORANGE, // eslint-disable-line no-use-before-define
      Pill.types.color.LIGHT_BLUE, // eslint-disable-line no-use-before-define
      Pill.types.color.LIGHT_ORANGE, // eslint-disable-line no-use-before-define
    ],
    [
      Pill.types.severity.NO_RISK, // eslint-disable-line no-use-before-define
      Pill.types.severity.LOW_RISK, // eslint-disable-line no-use-before-define
      Pill.types.severity.MEDIUM_RISK, // eslint-disable-line no-use-before-define
      Pill.types.severity.HIGH_RISK, // eslint-disable-line no-use-before-define
    ],
  ]),
  size: PropTypes.oneOf([Pill.types.size.SMALL, Pill.types.size.MEDIUM]), // eslint-disable-line no-use-before-define
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
Pill.types = {
  size: constants.limitedSize,
  color: constants.color,
  severity: types.severityPillColors,
};

export default Pill;
