import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import Toast from "../../Toast/src";

import { SimpleStory, WithFilterStory, WithDividers, WithDisabled, WithRawItems } from "./examples/Keyboard";

const storyName = getStoryName("ListBox");

export default {
  title: `${storyName}/Keyboard`,
};

export function Single() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "720px" }}>
        <Story>
          <Toast hasCloseButton={false}>ListBox keyboard interactions multiple cases.</Toast>
          <SimpleStory />
          <hr />
          <WithFilterStory />
          <hr />
          <WithDividers />
          <hr />
          <WithDisabled />
          <hr />
          <WithRawItems />
        </Story>
      </div>
    </div>
  );
}
