import React from "react";
import { getStoryName } from "storybook/storyTree";
import Basic from "./examples/Basic";

const storyName = getStoryName("ListBox");

export default {
  title: storyName,
};

function App() {
  return <Basic />;
}

export const ListBoxWithSearchBasic = () => <App />;
