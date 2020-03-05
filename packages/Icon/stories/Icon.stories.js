import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import InlineTest from "./examples/InlineTest";
import AllIconsStory from "./examples/AllIcons";

storiesOf("Icon", module)
  .addDecorator(withKnobs)
  .add("All Icons", AllIconsStory);
storiesOf("Icon", module).add("Inline Test", () => <InlineTest />);
