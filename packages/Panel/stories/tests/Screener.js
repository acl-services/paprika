import React from "react";
import Screener, { Steps } from "screener-storybook/src/screener";
import PushContentPanel from "../examples/PushContentPanel";

const screenerScript = new Steps()
  .snapshot("Panel - Push content expanded")
  .click("[data-pka-anchor='panel.trigger']")
  .snapshot("Panel - Push content collapsed")
  .end();

export default function ScreenerStory() {
  return (
    <Screener steps={screenerScript}>
      <PushContentPanel />
    </Screener>
  );
}
