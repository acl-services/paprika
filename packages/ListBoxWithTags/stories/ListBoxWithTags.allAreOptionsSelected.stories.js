import React from "react";
import { getStoryName } from "storybook/storyTree";
import AllOptionsAreSelected from "./examples/AllOptionsAreSelected";

const storyName = getStoryName("ListBoxWithTags");

export default {
  title: storyName,
};

function App() {
  return <AllOptionsAreSelected />;
}

export const ListBoxWithTagsAllOptionsAreSelected = () => <App />;
