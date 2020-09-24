import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import NotificationCard from "../src";
import Props from "./NotificationCard.mdx";

export default {
  title: getStoryName("NotificationCard"),
  component: NotificationCard,
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
