import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import FakeAppWithContext from "./examples/FakeAppWithContext";
import FakeAppWithoutContext from "./examples/FakeAppWithoutContext";
import FakeAppWithLocales from "./examples/withLocales/FakeAppWithLocales";

const storyName = getStoryName("L10n");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", () => (
    <FakeAppWithContext locale={select("locale", ["en", "de", "fr", "es", "pt", "ja", "zh"], "de")} />
  ));

storiesOf(`${storyName}/Examples`, module)
  .add("With Context", () => (
    <FakeAppWithContext locale={select("locale", ["en", "de", "fr", "es", "pt", "ja", "zh"], "de")} />
  ))
  .add("Without Context", () => <FakeAppWithoutContext />)
  .add("Providing Locales", () => <FakeAppWithLocales locale={select("locale", ["en", "fr"], "fr")} />);
