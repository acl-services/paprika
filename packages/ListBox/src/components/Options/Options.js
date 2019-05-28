import React from "react";

export default function Options(props) {
  let index = -1;

  return React.Children.map(props.children, child => {
    const { componentType = null } = child.type;

    if (child.type && (componentType === "ListBox.Option" || componentType === "ListBox.RawItem")) {
      index += 1;
      return React.cloneElement(child, { ...child.props, index });
    }

    return child;
  });
}
