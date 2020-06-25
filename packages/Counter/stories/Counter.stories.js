import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import SizesTypesExample from "./examples/SizesTypes";
import WithInlineTextExample from "./examples/WithInlineText";

const storyName = getStoryName("Counter");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);

storiesOf(`${storyName}/Examples`, module)
  .add("SizesTypesColors", () => <SizesTypesExample />)
  .add("With inline text", () => <WithInlineTextExample />);
