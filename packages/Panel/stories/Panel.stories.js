import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import Panel from "../src";

export default {
  title: getStoryName("Panel"),
  component: Panel,
};

export const showcase = Showcase;
showcase.story = {
  decorators: [withKnobs],
  parameters: {
    docs: { disable: true },
    options: {
      isToolshown: true,
      showPanel: true,
    },
    viewMode: "story",
  },
};
