import React from "react";
import { getStoryName } from "storybook/storyTree";
import * as widgets from "./examples";

export default {
  title: getStoryName("InlineEditing"),
};

export const Text = () => {
  return (
    <div style={{ padding: "32px" }}>
      <widgets.Text />
    </div>
  );
};

export const Table = () => {
  return <widgets.Table />;
};
