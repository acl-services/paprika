import React from "react";

export function extractChildrenProps(children) {
  let overrides;

  React.Children.forEach(children, child => {
    if (child.type.displayName === "DatePicker.Input") {
      overrides = { ...child.props };
    }
  });

  return overrides;
}
