import { withKnobs } from "@storybook/addon-knobs";
import Showcase from "./examples/Showcase";
import ResizeDetector from "../src";

export default {
  title: "Utilities | ResizeDetector",
  component: ResizeDetector,
};

export const showcase = Showcase;
showcase.story = {
  decorators: [withKnobs],
  parameters: {
    options: {
      isToolshown: true,
      showPanel: true,
      panelPosition: "bottom",
    },
    viewMode: "story",
  },
};
