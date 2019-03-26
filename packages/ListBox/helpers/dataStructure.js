import React from "react";
import uuidv4 from "uuid/v4";
import ListBox from "@paprika/listbox";

function createOption({ index, child, title = null, isOptionActionGroup = false }) {
  const { label, value, isHidden, isSelected, isDisabled } = child.props;

  const childClone = React.cloneElement(child, { ...child.props, _index: index });
  return {
    content: childClone,
    groupTitle: title,
    hasLabel: label,
    id: uuidv4(),
    index,
    isHidden,
    isOptionActionGroup,
    isSelected,
    isDisabled,
    label: label || child,
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
    } else if (child.type.componentType === "ListBox.Option") {
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

export function getFooter(children) {
  const footer = React.Children.toArray(children).filter(child => {
    if (child.type.componentType === "ListBox.Footer") {
      return child.type;
    }
    return false;
  });

  if (footer.length) {
    return footer[0];
  }

  return null;
}
