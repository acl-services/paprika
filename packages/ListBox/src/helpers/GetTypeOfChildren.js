import React from "react";

export function GetTypeOfChildren(children) {
  let Filter = null;
  let Popover = null;
  let Trigger = null;
  const Options = [];

  React.Children.toArray(children).forEach(child => {
    switch (child.type.componentType) {
      case "ListBox.Filter":
        Filter = child;
        break;
      case "ListBox.Popover":
        Popover = child;
        break;
      case "ListBox.Trigger":
        Trigger = child;
        break;
      default:
        Options.push(child);
    }
  });

  return {
    Filter,
    Options,
    Popover,
    Trigger,
  };
}
