import React from "react";
import { select } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { Story } from "storybook/assets/styles/common.styles";
import L10n from "@paprika/l10n";
import App from "./ShowcaseApp";

const storyName = getStoryName("Filter");

export default {
  title: storyName,
};

export const Showcase = () => (
  <Story>
    <L10n locale={select("locale", ["en", "de", "es", "fr", "ja", "pt", "zh"], "en")}>
      <App />
    </L10n>
  </Story>
);
