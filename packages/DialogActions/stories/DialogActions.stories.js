import { withKnobs } from "@storybook/addon-knobs";

import Props from "./DialogActions.mdx";
import Showcase from "./examples/Showcase";
import DialogActions from "../src";

export default {
  title: " | DialogActions",
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
