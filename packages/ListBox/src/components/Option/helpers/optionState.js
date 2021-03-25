import React from "react";
import { v4 as uuidv4 } from "uuid";
import { isWhiteListed } from "../../Options/helpers/options";

function createOption({ index, child }) {
  const { isDisabled, isHidden, label, onClick, preventDefaultOnSelect, value } = child.props;

  const isSelected = child.props.isSelected || child.props.defaultIsSelected || false;

  return {
    content: child,
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
    if (child.type && isWhiteListed(child.type.displayName)) {
      const option = createOption({ index, child });
      options[index] = option;
      optionsIndex[option.id] = index;
      index += 1;
    }

    return child;
  });

  return { options, optionsIndex };
}
