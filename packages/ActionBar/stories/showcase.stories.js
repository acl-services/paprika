import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import L10n from "@paprika/l10n";
import App from "./ShowcaseApp";

storiesOf("Action Bar", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => (
    <L10n locale={select("locale", ["en", "de", "es", "fr", "ja", "pt", "zh"], "en")}>
      <App />
    </L10n>
  ));
