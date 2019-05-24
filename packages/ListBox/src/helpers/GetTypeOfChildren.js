import React from "react";

export function GetTypeOfChildren(children) {
  let Filter = null;
  let Popover = null;
  const Options = [];

  React.Children.toArray(children).forEach(child => {
    switch (child.type.componentType) {
      case "ListBox.Filter":
        Filter = child;
        break;
      case "ListBox.Popover":
        Popover = child;
        break;
      default:
        Options.push(child);
    }
  });

  return {
    Filter,
    Popover,
    Options,
  };
}
