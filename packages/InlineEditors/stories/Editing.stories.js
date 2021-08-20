import React from "react";
import { getStoryName } from "storybook/storyTree";
import Table from "./examples/Table";
import TableErrorStory from "./examples/Table.error";
import {
  ListBoxSingleStory,
  ListBoxMultipleWithError as ListBoxMultipleWithErrorExample,
  ListBoxMultipleWithLoading as ListBoxMultipleWithLoadingExample,
  ListBoxMultipleWithSuccess as ListBoxMultipleWithSuccessExample,
} from "./examples/ListBox";
import { ForScreener as ForScreenerExample } from "./screener/Editing.screener.stories";
import InputExample from "./examples/Input";
import TextareaExample from "./examples/Textarea";

export default {
  title: getStoryName("InlineEditors"),
};

export const ListBoxWithinATable = () => {
  return <Table />;
};

export const ListBoxWithinATableError = () => {
  return <TableErrorStory />;
};

export const ListBoxSingle = () => {
  return <ListBoxSingleStory />;
};

export const ListBoxMultipleWithError = () => {
  return <ListBoxMultipleWithErrorExample />;
};

export const ListBoxMultipleWithLoading = () => {
  return <ListBoxMultipleWithLoadingExample />;
};

export const ListBoxMultipleWithSuccess = () => {
  return <ListBoxMultipleWithSuccessExample />;
};

export const Input = () => {
  return <InputExample />;
};

export const Textarea = () => {
  return <TextareaExample />;
};

export const ForScreener = () => {
  return <ForScreenerExample />;
};
