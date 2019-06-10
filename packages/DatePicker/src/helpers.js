import React from "react";

export function getExtendedInputProps(children) {
  let overrides;

  React.Children.forEach(children, child => {
    if (child.type.displayName === "DatePicker.Input") {
      overrides = { ...child.props };
    }
  });

  return overrides;
}
