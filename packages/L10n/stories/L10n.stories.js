import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import Filter from "@paprika/filter";
import L10n from "@paprika/l10n";

const storyName = getStoryName("L10n");

export default {
  title: storyName,
};

export const ShowcaseStory = () => (
  <ExampleStory storyName="L10n" tagline={ExampleStory.defaultTaglines.showcase}>
    <L10n locale={select("locale", ["en", "de", "fr", "es", "pt", "ja", "zh"], "de")}>
      Change the language in the Storybook Knobs and notice how the Paprika components below change:
      <br />
      <br />
      <code>&lt;Filter /&gt;:</code>&nbsp;
      <Filter columns={{}} data={null} numberApplied={2} />
    </L10n>
  </ExampleStory>
);

ShowcaseStory.story = {
  name: "Showcase",
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};
