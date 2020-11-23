import React from "react";
import { getStoryName } from "storybook/storyTree";
import CustomTriggerApp from "./examples/CustomTrigger";

const storyName = getStoryName("ListBoxWithTags");

export default {
  title: storyName,
};

function App() {
  return <CustomTriggerApp />;
}

export const UncontrolledWithCustomTrigger = () => <App />;
