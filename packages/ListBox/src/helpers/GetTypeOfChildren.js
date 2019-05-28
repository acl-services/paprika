import React from "react";

export function GetTypeOfChildren(children) {
  let Filter = null;
  let Footer = null;
  let Popover = null;
  let Trigger = null;
  const Options = [];

  React.Children.toArray(children).forEach(child => {
    switch (child.type.componentType) {
      case "ListBox.Filter":
        Filter = child;
        break;
      case "ListBox.Footer":
        Footer = child;
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
    Footer,
    Options,
    Popover,
    Trigger,
  };
}
