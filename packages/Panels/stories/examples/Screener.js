import React from "react";
import Screener, { Steps } from "screener-storybook/src/screener";
import PanelsPushContentStory from "./PanelsPushContentStory";

const screenerScript = new Steps()
  .snapshot("Panels - Push content expanded")
  .click("[data-pka-anchor='panels.trigger']")
  .snapshot("Panels - Push content collapsed")
  .end();

const ScreenerStory = () => {
  return (
    <Screener steps={screenerScript}>
      <PanelsPushContentStory width="50%" />
    </Screener>
  );
};

export default ScreenerStory;
