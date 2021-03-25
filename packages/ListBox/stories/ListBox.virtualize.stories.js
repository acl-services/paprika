import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";

import { VirtualizeStory } from "./examples/Virtualize";

const storyName = getStoryName("ListBox");

export default {
  title: `${storyName}/Backyard/Virtualize`,
};

export function Virtualized() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "720px" }}>
        <Story>
          <VirtualizeStory />
        </Story>
      </div>
    </div>
  );
}
