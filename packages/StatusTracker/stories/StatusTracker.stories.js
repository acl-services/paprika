import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import Variations from "./examples/Variations";
import Props from "./StatusTracker.mdx";
import StatusTracker from "../src";

const storyName = getStoryName("StatusTracker");

export default {
  title: storyName,
  component: StatusTracker,
};

export const showcase = Showcase;
showcase.story = {
  decorators: [withKnobs],
  parameters: {
    docs: { page: Props },
    options: {
      isToolshown: true,
      showPanel: true,
    },
    viewMode: "story",
  },
};

export const variations = Variations;
