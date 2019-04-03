import React from "react";
import uuidv4 from "uuid/v4";
import ListBox from "@paprika/listbox";

export function createOption({ index, child, title = null, isOptionActionGroup = false }) {
  const { label, value, isHidden, isSelected, isDisabled, onClick, isInteractive, renderChecker } = child.props;

  return {
    content: child,
    groupTitle: title,
    hasLabel: label,
    id: uuidv4(),
    index,
    isDisabled,
    isHidden,
    isInteractive,
    isOptionActionGroup,
    isSelected,
    label: label || child.props.children, // we will try to extract the label from the children if doesn't have label
    onClick,
    renderChecker,
    value: value || undefined,
  };
}

export function getDataOptions(children, groups, isMulti) {
  if (!children) throw Error("Listbox.Options is a required prop, please check you are passing correctly the data");

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
    if (child.type && child.type.componentType === "ListBox.Group") {
      const title = child.props.title;
      React.Children.toArray(child.props.children).forEach(_child => {
        options[index] = createOption({ index, child: _child, title });
        index += 1;
      });
    } else if (child.type && child.type.componentType === "ListBox.Option") {
      options[index] = createOption({ index, child });
      index += 1;
    }
  });

  return options;
}

export function getDataGroups(children) {
  if (!children) throw Error("Listbox.Options is a required prop, please check you are passing correctly the data");

  const map = React.Children.map;
  const groups = map(child => {
    if (child.type.componentType === "ListBox.Group") {
      return child.props.title;
    }

    return null;
  }).filter(chunk => chunk);

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
