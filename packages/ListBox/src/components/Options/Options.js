import React from "react";
import { isWhiteListed } from "./helpers/options";

function Options(props) {
  // eslint-disable-next-line react/prop-types
  const { children, isPopoverOpen } = props;

  let index = -1;
  return React.Children.map(children, child => {
    if (child === null) return null;

    const { displayName = null } = child.type;

    if (child.type && isWhiteListed(displayName)) {
      index += 1;
      return React.cloneElement(child, { ...child.props, index, isPopoverOpen });
    }

    return child;
  });
}

export default React.memo(Options);
