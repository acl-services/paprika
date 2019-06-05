import React from "react";

export function extractChildren(children) {
  let SidePanelOverlay = null;
  let SidePanelTrigger = null;
  let SidePanelHeader = null;

  const rest = [];
  React.Children.toArray(children).forEach(child => {
    if (child.type) {
      switch (child.type.componentType) {
        case "SidePanel.Overlay":
          SidePanelOverlay = child;
          break;
        case "SidePanel.Header":
          SidePanelHeader = child;
          break;
        case "SidePanel.Trigger":
          SidePanelTrigger = child;
          break;
        default:
          rest.push(child);
      }
    }
  });

  return { Trigger: SidePanelTrigger, Overlay: SidePanelOverlay, Header: SidePanelHeader, children: rest };
}
