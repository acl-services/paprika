import React from "react";
import { getStoryName } from "storybook/storyTree";
import CustomTriggerApp from "./examples/CustomTrigger";

const storyName = getStoryName("ListBox");

export default {
  title: storyName,
};

function App() {
  return <CustomTriggerApp />;
}

export const ListBoxWithTagsUncontrolledWithCustomTrigger = () => <App />;
