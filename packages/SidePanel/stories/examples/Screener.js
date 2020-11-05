import React from "react";
import Screener, { Steps } from "screener-storybook/src/screener";
import SidePanelPushContentStory from "./SidePanelPushContentStory";

const screenerScript = new Steps()
  .snapshot("SidePanel - Push content expanded")
  .click("[data-pka-anchor='side-panel.trigger']")
  .snapshot("SidePanel - Push content collapsed")
  .end();

const ScreenerStory = () => {
  return (
    <Screener steps={screenerScript}>
      <SidePanelPushContentStory width="50%" />
    </Screener>
  );
};

export default ScreenerStory;
