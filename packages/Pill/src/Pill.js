import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import * as types from "./types";
import * as sc from "./Pill.styles";

function Pill(props) {
  const { a11yText, pillColor, isDisabled, size, onClick, ...moreProps } = props;

  const styleProps = {
    pillColor,
    size,
  };

  if (onClick) {
    return (
      <sc.RawButtonPill {...styleProps} a11yText={a11yText} isDisabled={isDisabled} onClick={onClick} {...moreProps}>
        <sc.PillText>{props.children}</sc.PillText>
      </sc.RawButtonPill>
    );
  }

  return (
    <sc.Pill {...styleProps} {...moreProps} data-pka-anchor="pill">
      <sc.PillText>{props.children}</sc.PillText>
    </sc.Pill>
  );
}

Pill.types = {
  size: constants.limitedSize,
  color: constants.color,
  severity: types.severityPillColors,
};

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  pillColor: PropTypes.oneOf([
    Pill.types.color.BLACK,
    Pill.types.color.BLUE,
    Pill.types.color.GREEN,
    Pill.types.color.GREY,
    Pill.types.color.ORANGE,
    Pill.types.color.LIGHT_BLUE,
    Pill.types.color.LIGHT_ORANGE,
    Pill.types.severity.NO_RISK,
    Pill.types.severity.LOW_RISK,
    Pill.types.severity.MEDIUM_RISK,
    Pill.types.severity.HIGH_RISK,
  ]),
  size: PropTypes.oneOf([Pill.types.size.SMALL, Pill.types.size.MEDIUM]),
};

const defaultProps = {
  a11yText: null,
  isDisabled: false,
  onClick: null,
  pillColor: Pill.types.color.GREY,
  size: Pill.types.size.MEDIUM,
};

Pill.displayName = "Pill";
Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default Pill;
