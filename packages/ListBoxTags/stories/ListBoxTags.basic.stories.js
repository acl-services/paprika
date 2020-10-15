import React from "react";
import { getStoryName } from "storybook/storyTree";

import ListBoxTags from "../src";

const storyName = getStoryName("ListBoxTags");

export default {
  title: storyName,
};

export const showcase = () => {
  return <ListBoxTags />
}