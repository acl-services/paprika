import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./Pill.styles";

export const pillColors = ["black", "blue", "green", "grey", "orange", "lightBlue", "lightOrange"];
export const severityPillColors = ["noRisk", "lowRisk", "mediumRisk", "highRisk"];

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  pillColor: PropTypes.oneOf([...pillColors, ...severityPillColors]),
  size: PropTypes.oneOf(ShirtSizes.LIMITED),
};

const defaultProps = {
  a11yText: null,
  isDisabled: false,
  onClick: null,
  pillColor: "grey",
  size: "medium",
};

function Pill(props) {
  const { a11yText, pillColor, isDisabled, size, onClick, ...moreProps } = props;

  const styleProps = {
    pillColor,
    size,
  };

  if (onClick) {
    return (
      <sc.rawPillStyle {...styleProps} a11yText={a11yText} isDisabled={isDisabled} onClick={onClick} {...moreProps}>
        <sc.pillTextStyles>{props.children}</sc.pillTextStyles>
      </sc.rawPillStyle>
    );
  }

  return (
    <sc.pillStyles {...styleProps} {...moreProps} data-pka-anchor="pill">
      <sc.pillTextStyles>{props.children}</sc.pillTextStyles>
    </sc.pillStyles>
  );
}

Pill.displayName = "Pill";
Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default Pill;
