import React from "react";
import { getStoryName } from "storybook/storyTree";
import UncontrolledUsersApp from "./examples/UncontrolledUser";

const storyName = getStoryName("ListBoxWithTags");

export default {
  title: storyName,
};

function App() {
  return <UncontrolledUsersApp />;
}

export const UncontrolledUsers = () => <App />;
