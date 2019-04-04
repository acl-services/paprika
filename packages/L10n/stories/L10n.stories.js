import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import FakeAppWithContext from "./examples/FakeAppWithContext";
import FakeAppWithoutContext from "./examples/FakeAppWithoutContext";

storiesOf("L10n", module)
  .addDecorator(withKnobs)
  .add("FakeAppWithContext", () => <FakeAppWithContext locale={select("locale", { en: "en", fr: "fr" }, "en")} />)
  .add("FakeAppWithoutContext", () => <FakeAppWithoutContext />);
