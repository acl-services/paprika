import React from "react";
import { isWhiteListed } from "./helpers";

export default function Options(props) {
  let index = -1;

  return React.Children.map(props.children, child => {
    const { componentType = null } = child.type;

    if (child.type && isWhiteListed(componentType)) {
      index += 1;
      return React.cloneElement(child, { ...child.props, index });
    }

    return child;
  });
}
