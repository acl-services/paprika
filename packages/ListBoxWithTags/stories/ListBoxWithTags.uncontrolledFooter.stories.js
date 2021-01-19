import React from "react";
import { getStoryName } from "storybook/storyTree";
import UncontrolledFooterApp from "./examples/UncontrolledFooter";

const storyName = getStoryName("ListBoxWithTags");

export default {
  title: storyName,
};

export const ListBoxWithTagsUncontrolledFooter = () => <UncontrolledFooterApp />;
