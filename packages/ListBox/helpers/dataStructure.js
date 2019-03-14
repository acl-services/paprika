import React from "react";
import uuidv4 from "uuid/v4";
import ListBox from "@paprika/listbox";

function createOption({ index, child, title = null, isOptionActionGroup = false }) {
  const { children, label, value, isHidden, isSelected, isDisabled } = child.props;

  return {
    content: children,
    groupTitle: title,
    hasLabel: label,
    id: uuidv4(),
    index,
    isHidden,
    isOptionActionGroup,
    isSelected,
    isDisabled,
    label: label || children,
    value: value || undefined,
  };
}

export function getDataOptions(children, groups, isMulti) {
  const options = {};
  let index = 0;

  // shouldn't be muliple selection filter on a single select listbox
  if (groups.length && isMulti) {
    groups.forEach(group => {
      options[index] = createOption({
        index,
        child: <ListBox.Option>{group}</ListBox.Option>,
        isOptionActionGroup: true,
      });
      index += 1;
    });
  }

  React.Children.toArray(children).forEach(child => {
    if (child.type.componentType === "ListBox.Group") {
      const title = child.props.title;
      React.Children.toArray(child.props.children).forEach(_child => {
        options[index] = createOption({ index, child: _child, title });
        index += 1;
      });
    } else {
      options[index] = createOption({ index, child });
      index += 1;
    }
  });

  return options;
}

export function getDataGroups(children) {
  const groups = [];
  React.Children.toArray(children).forEach(child => {
    if (child.type.componentType === "ListBox.Group") {
      groups.push(child.props.title);
    }
  });
  return groups;
}
