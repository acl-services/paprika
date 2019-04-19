import React from "react";

export default function Options(props) {
  let index = -1;

  return React.Children.map(props.children, child => {
    const { componentType = null } = child.type;

    if (child.type && componentType === "ListBox.Group") {
      const label = child.props.label;
      const groupId = child.props.groupId;
      let lastKnownGroupId = null;
      let isNewGroup = null;

      return React.Children.map(child.props.children, _child => {
        if (!_child) {
          return;
        }

        index += 1;

        if (!lastKnownGroupId) {
          isNewGroup = true;
          lastKnownGroupId = groupId;
        } else {
          isNewGroup = false;
        }

        return React.cloneElement(_child, {
          ..._child.props,
          groupId,
          label,
          index,
          isNewGroup,
        });
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
