import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import SideNavigation from "../src";
import Props from "./SideNavigation.mdx";

export default {
  title: getStoryName("SideNavigation"),
  component: SideNavigation,
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
