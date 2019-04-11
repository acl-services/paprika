import React from "react";

export default function Options(props) {
  let index = -1;

  if (!props.children) return null;

  return React.Children.map(props.children, child => {
    const { componentType = null } = child.type;
    if (child.type && componentType === "ListBox.Group") {
      const label = child.props.label;
      const groupId = child.props.groupId;

      return React.Children.map(child.props.children, _child => {
        index += 1;
        return React.cloneElement(_child, { ..._child.props, groupId: _child.props.groupId || groupId, label, index });
      });
    }

    if (child.type && componentType === "ListBox.Footer") {
      props.onFooterFound(child);
      return null;
    }

    if (child.type && componentType === "ListBox.Option") {
      index += 1;
      return React.cloneElement(child, { ...child.props, index });
    }

    return child;
  });
}
