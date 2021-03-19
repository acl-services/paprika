import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";

import { InfiniteScrollStory } from "./examples/InfiniteScroll";

const storyName = getStoryName("ListBox");

export default {
  title: `${storyName}/Backyard/Sandbox/InfiniteScroll`,
};

export function InfiniteScroll() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "720px" }}>
        <Story>
          <InfiniteScrollStory />
        </Story>
      </div>
    </div>
  );
}
