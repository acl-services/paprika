import React from "react";
import momentPropTypes from "react-moment-proptypes";

export function extractChildrenProps(children, target) {
  let overrides;

  React.Children.forEach(children, child => {
    if (child.type.displayName === target.displayName) {
      overrides = { ...child.props };
    }
  });

  return overrides;
}

export function isMomentObjectOrNull(date) {
  if (date === null) return true;

  return momentPropTypes.momentObj(date);
}
