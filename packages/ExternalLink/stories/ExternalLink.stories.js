import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import LayoutExamples from "./examples/LayoutExamples";

const storyName = getStoryName("ExternalLink");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);

storiesOf(`${storyName}/Examples`, module).add("Screener Examples", LayoutExamples);
