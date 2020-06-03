import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Props from "./DialogActions.mdx";
import Showcase from "./examples/Showcase";
import DialogActions from "../src";

export default {
  title: getStoryName("DialogActions"),
  component: DialogActions,
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
  },
};
