import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import Screener from "./examples/Screener";

const storyName = getStoryName("NotificationCard");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);

storiesOf(`${storyName}/Backyard/Tests`, module).add("Screener", Screener);
