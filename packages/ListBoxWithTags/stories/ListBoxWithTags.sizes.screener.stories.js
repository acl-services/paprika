import React from "react";
import { getStoryName } from "storybook/storyTree";
import Sizes from "./examples/Sizes";
import Footer from "./examples/UncontrolledFooter";

const storyName = getStoryName("ListBoxWithTags");

export default {
  title: storyName,
};

export const ListBoxWithTagsScreener = () => <Sizes />;

export const ListBoxWithTagsFooterScreener = () => <Footer isOpen />;
