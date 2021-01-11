import React from "react";
import { getStoryName } from "storybook/storyTree";
import Sizes from "./examples/Sizes";

const storyName = getStoryName("ListBoxWithTags");

export default {
  title: storyName,
};

export const ListBoxWithTagsScreener = () => <Sizes />;
