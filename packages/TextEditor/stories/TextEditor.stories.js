import React from "react";
import { getStoryName } from "storybook/storyTree";

import TextEditorSimple from "./examples/simple";

export default {
  title: getStoryName("TextEditor"),
};

export const Simple = () => {
  return <TextEditorSimple />;
};
