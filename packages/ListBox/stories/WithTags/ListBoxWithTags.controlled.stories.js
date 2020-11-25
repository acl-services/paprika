import React from "react";
import { getStoryName } from "storybook/storyTree";
import ControlledApp from "./examples/Controlled";

const storyName = getStoryName("ListBox");

export default {
  title: storyName,
};

function App() {
  return <ControlledApp />;
}

export const ListBoxWithTagsControlled = () => <App />;
