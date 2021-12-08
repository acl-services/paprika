import React from "react";
import Screener, { Steps } from "screener-storybook/src/screener";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import { RealWorldStory } from "./examples/RealWorld";

const storyName = getStoryName("DataTable");

export default {
  title: `${storyName}/Backyard/Tests`,
  id: "data-table-tests",
};

const screenerScript = new Steps()
  .snapshot("Default")
  .click("[data-pka-anchor='dataTable.toggleBackground']")
  .snapshot("hasZebraStripes=true")
  .click("[data-pka-anchor='dataTable.toggleBorder']")
  .snapshot("borderType='none'")
  .click("[data-pka-anchor='dataTable.toggleBorder']")
  .snapshot("borderType='horizontal'")
  .click("[data-pka-anchor='dataTable.toggleBorder']")
  .snapshot("borderType='vertical'")
  .end();

export const screener = () => (
  <Screener steps={screenerScript}>
    <RealWorldStory isForTesting />
  </Screener>
);
screener.story = {
  parameters: testStoryParameters,
};
