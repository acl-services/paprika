import React from "react";
import Screener, { Steps } from "screener-storybook/src/screener";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import ShowcaseApp from "./ShowcaseApp/ShowcaseApp";

const storyName = getStoryName("ActionBar");

export default {
  title: `${storyName}/Backyard/Tests`,
  id: "action-bar-tests",
};

const screenerScript = new Steps()
  .snapshot("All close")
  .click("[data-pka-anchor='actionBar.sort.trigger']")
  .click("[data-pka-anchor='actionBar.sort.addSort']")
  .snapshot("Sort panel opened")
  .click("[data-pka-anchor='actionBar.columnsArrangement.trigger']")
  .snapshot("Columns arrangement panel opened")
  .end();

export const screener = () => (
  <Screener steps={screenerScript}>
    <ShowcaseApp />
  </Screener>
);
screener.story = {
  parameters: testStoryParameters,
};
