import React from "react";
import { getStoryName } from "storybook/storyTree";
import * as widgets from "./examples";

export default {
  title: getStoryName("InlineEditing"),
};

export const Table = () => {
  return <widgets.Table />;
};
