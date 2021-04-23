import React from "react";
import { getStoryName } from "storybook/storyTree";
import Table from "./examples/Table";
import TableErrorStory from "./examples/Tabl.error";
import { ListBoxSingleStory } from "./examples/ListBox";
import Input from "./examples/Input";

export default {
  title: getStoryName("InlineEditors"),
};

export const WithInATable = () => {
  return <Table />;
};

export const WithInATableError = () => {
  return <TableErrorStory />;
};

export const ListBoxSingleWithInlineEditing = () => {
  return <ListBoxSingleStory />;
};

export const WithInput = () => {
  return <Input />;
};
