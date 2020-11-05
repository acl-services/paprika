import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import Panels from "../src";

export default {
  title: getStoryName("Panels"),
  component: Panels,
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
