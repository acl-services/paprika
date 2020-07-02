import React from "react";

export default function extractChildrenProps(children, target) {
  let props = {};

  React.Children.forEach(children, child => {
    if (child.type && child.type.displayName === target.displayName) {
      props = { ...child.props };
    }
  });

  return props;
}
