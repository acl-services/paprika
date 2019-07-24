import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import FakeAppWithContext from "./examples/FakeAppWithContext";
import FakeAppWithoutContext from "./examples/FakeAppWithoutContext";
import FakeAppWithLocales from "./examples/withLocales/FakeAppWithLocales";

storiesOf("L10n", module)
  .addDecorator(withKnobs)
  .add("With Context", () => (
    <FakeAppWithContext locale={select("locale", ["en", "de", "fr", "es", "pt", "pl", "ja", "zh"], "de")} />
  ))
  .add("Without Context", () => <FakeAppWithoutContext />)
  .add("Providing Locales", () => <FakeAppWithLocales locale={select("locale", ["en", "fr"], "en")} />);
