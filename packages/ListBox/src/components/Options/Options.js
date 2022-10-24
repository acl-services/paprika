import React from "react";
import { isWhiteListed } from "./helpers/options";

export default function Options(props) {
  let index = -1;

  return React.Children.map(props.children, child => {
    const { displayName = null } = child.type;

    if (child.type && isWhiteListed(displayName)) {
      index += 1;
      return React.cloneElement(child, { ...child.props, index });
    }

    return child;
  });
}
