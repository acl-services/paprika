import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import Variations from "./examples/Variations";
import Breadcrumbs from "../src";
import Props from "./Breadcrumbs.mdx";

export default {
  title: getStoryName("Breadcrumbs"),
  component: Breadcrumbs,
};

export const showcase = Showcase;

export const variations = Variations;

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
