import React from "react";

export function extractChildrenProps(children, target) {
  let overrides;

  React.Children.forEach(children, child => {
    if (child.type.displayName === target.displayName) {
      overrides = { ...child.props };
    }
  });

  return overrides;
}
