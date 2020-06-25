import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import L10n from "@paprika/l10n";
import App from "./ShowcaseApp";

const storyName = getStoryName("ActionBar");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", () => (
    <Story>
      <L10n locale={select("locale", ["en", "de", "es", "fr", "ja", "pt", "zh"], "en")}>
        <App />
      </L10n>
    </Story>
  ));
