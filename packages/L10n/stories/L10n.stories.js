import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import Basic from "./examples/Basic";

storiesOf("L10n", module)
  .addDecorator(withKnobs)
  .add("Basic", () => <Basic locale={select("locale", { en: "en", fr: "fr" }, "en")} />);
