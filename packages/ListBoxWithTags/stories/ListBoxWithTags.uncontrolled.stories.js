import React from "react";
import { getStoryName } from "storybook/storyTree";
import UncontrolledApp from "./examples/Uncontrolled";

const storyName = getStoryName("ListBoxWithTags");

export default {
  title: storyName,
};

export const ListBoxWithTagsUncontrolled = () => <UncontrolledApp />;
