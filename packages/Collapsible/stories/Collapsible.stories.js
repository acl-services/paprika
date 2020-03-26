import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import Collapsible from "../src/Collapsible";
import Variations from "./examples/Variations";
import Showcase from "./examples/Showcase";
import Props from "./Collapsible.mdx";

export default {
  title: "Collapsible",
  component: Collapsible,
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

export const variations = () => <Variations />;
variations.story = {
  parameters: {
    docs: { page: Variations },
    options: {
      isToolshown: true,
      showPanel: false,
    },
  },
};
