import React from "react";
import { select } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading/lib/Heading";
import L10n from "@paprika/l10n";
import ShowcaseApp from "./Showcase";

const storyName = getStoryName("Filter");

export default {
  title: storyName,
};

export const Showcase = () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Filter
    </Heading>
    <Tagline>Interactive example of the component.</Tagline>
    <Rule />

    <L10n locale={select("locale", ["en", "de", "es", "fr", "ja", "pt", "zh"], "en")}>
      <ShowcaseApp />
    </L10n>
  </Story>
);
