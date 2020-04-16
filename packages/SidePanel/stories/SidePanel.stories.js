import { withKnobs } from "@storybook/addon-knobs";

import Showcase from "./examples/Showcase";
import SidePanel from "../src";

export default {
  title: "SidePanel",
  component: SidePanel,
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
