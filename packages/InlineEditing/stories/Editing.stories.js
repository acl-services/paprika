import React from "react";
import { getStoryName } from "storybook/storyTree";
import Edit from "./examples/Edit";

export default {
  title: getStoryName("InlineEditing"),
};

export const Editing = () => {
  return <Edit />;
};
