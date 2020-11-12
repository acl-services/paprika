import React from "react";
import uuidv4 from "uuid/v4";
import { isWhiteListed } from "../../Options/helpers/options";

function createOption({ index, child, groupLabel = null, groupId = null }) {
  const { isDisabled, isHidden, label, onClick, preventDefaultOnSelect, value } = child.props;

  const isSelected = child.props.isSelected || child.props.defaultIsSelected || false;

  return {
    content: child,
    groupId,
    groupLabel,
    hasLabel: label,
    id: `opt_${uuidv4()}`,
    index,
    isDisabled,
    isHidden,
    isSelected,
    label: label || child.props.children, // we will try to extract the label from the children if doesn't have label
    onClick,
    preventDefaultOnSelect,
    value: value || undefined,
  };
}

export function getDataOptions(children) {
  if (!children) throw new Error("ListBox.Options is a required prop, please check you are passing correctly the data");
  if (!children.length) return [];

  const options = {};
  let index = 0;

  React.Children.toArray(children).forEach(child => {
    if (child.type && isWhiteListed(child.type.displayName)) {
      options[index] = createOption({ index, child, groupId: child.props.groupId });
      index += 1;
    }

    return child;
  });

  return options;
}
