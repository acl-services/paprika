import React from "react";
import Screener, { Steps } from "screener-storybook/src/screener";
import PanelPushContentStory from "./PanelPushContentStory";

const screenerScript = new Steps()
  .snapshot("Panel - Push content expanded")
  .click("[data-pka-anchor='panel.trigger']")
  .snapshot("Panel - Push content collapsed")
  .end();

const ScreenerStory = () => {
  return (
    <Screener steps={screenerScript}>
      <PanelPushContentStory width="50%" />
    </Screener>
  );
};

export default ScreenerStory;
