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

export const ListBoxWithinATable = () => <Table />;

export const ListBoxWithinATableError = () => <TableErrorStory />;

export const ListBoxSingle = () => <ListBoxSingleStory />;

export const ListBoxMultipleWithError = () => <ListBoxMultipleWithErrorExample />;

export const ListBoxMultipleWithLoading = () => <ListBoxMultipleWithLoadingExample />;

export const ListBoxMultipleWithSuccess = () => <ListBoxMultipleWithSuccessExample />;

export const Input = () => <InputExample />;

export const Textarea = () => <TextareaExample />;

export const ForScreener = () => <ForScreenerExample />;
