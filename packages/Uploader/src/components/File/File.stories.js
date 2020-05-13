import React from "react";
import { storiesOf } from "@storybook/react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import File from "./File";
import types from "../../types";

const props = {
  error: null,
  name: "MyFile.jpg",
  progress: 0,
  size: 12345678,
  status: types.IDLE,
};

storiesOf("Uploader/Subcomponents", module).add("File", () => (
  <Story>
    <File {...props} />
    <File {...props} progress={37} status={types.PROCESSING} />
    <File {...props} progress={100} status={types.SUCCESS} />
    <File {...props} progress={37} error="Something went wrong" status={types.ERROR} />
  </Story>
));
