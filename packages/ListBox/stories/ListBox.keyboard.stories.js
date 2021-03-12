import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";

import { SingleStory, MultiStory } from "./examples/Keyboard";

const storyName = getStoryName("ListBox");

export default {
  title: `${storyName}/Keyboard`,
};

export function Single() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "720px" }}>
        <Story>
          <SingleStory />
          <MultiStory />
        </Story>
      </div>
    </div>
  );
}
