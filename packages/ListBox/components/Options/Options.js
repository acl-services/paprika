import React from "react";

export default function Options(props) {
  let index = -1;

  return React.Children.map(props.children, child => {
    if (child.type && child.type.componentType === "ListBox.Group") {
      const title = child.props.title;
      const groupName = child.props.groupName || title;
      return React.Children.map(child.props.children, _child => {
        index += 1;
        return React.cloneElement(_child, { ..._child.props, index, groupName });
      });
    }

    if (child.type && child.type.componentType === "ListBox.Option") {
      index += 1;
      return React.cloneElement(child, { ...child.props, index });
    }

    return child;
  });
}
