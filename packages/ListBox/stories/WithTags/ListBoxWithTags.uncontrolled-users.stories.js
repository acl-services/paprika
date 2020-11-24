import React from "react";
import { getStoryName } from "storybook/storyTree";
import UncontrolledUsersApp from "./examples/UncontrolledUser";

const storyName = getStoryName("ListBox");

export default {
  title: storyName,
};

function App() {
  return <UncontrolledUsersApp />;
}

export const ListBoxWithTagsUncontrolledUsers = () => <App />;
