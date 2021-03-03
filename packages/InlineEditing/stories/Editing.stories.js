import React from "react";
import { getStoryName } from "storybook/storyTree";
import Table from "./examples/Table";
import ListBox from "./examples/ListBox";

export default {
  title: getStoryName("InlineEditing"),
};

export const WithInATable = () => {
  return <Table />;
};

export const ListBoxWithInlineEditing = () => {
  return <ListBox />;
};
