import React from "react";
import { v4 as uuidv4 } from "uuid";
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
  if (!children) throw new Error("ListBox.Option is a required prop, please check you are passing correctly the data");
  if (!children.length) return [];

  const options = {};
  const optionsIndex = {};
  let index = 0;

  React.Children.toArray(children).forEach(child => {
    const type = child.type.type || child.type;
    if (type && isWhiteListed(type.displayName)) {
      const option = createOption({ index, child, groupId: child.props.groupId });
      options[index] = option;
      optionsIndex[option.id] = index;
      index += 1;
    }

    return child;
  });

  return { options, optionsIndex };
}
