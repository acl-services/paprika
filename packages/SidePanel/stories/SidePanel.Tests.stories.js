import React from "react";
import Screener from "./examples/Screener";
import { SidePanelDefaultSticky, SidePanelOnAfter, SidePanelFooterSticky } from "./examples/Cypress";

export default {
  title: " | SidePanel/ Automation Tests",
};

export const screener = () => <Screener />;
export const sidePanelDefaultSticky = () => <SidePanelDefaultSticky />;
export const sidePanelOnAfter = () => <SidePanelOnAfter />;
export const sidePanelFooterSticky = () => <SidePanelFooterSticky />;
