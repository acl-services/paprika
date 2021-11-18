import React from "react";

import {
  ListBoxSingleStory,
  ListBoxMultipleWithError,
  ListBoxMultipleWithLoading,
  ListBoxMultipleWithSuccess,
} from "../examples/ListBox";

export const ForScreener = () => (
  <>
    <ListBoxSingleStory />
    <ListBoxMultipleWithError />
    <ListBoxMultipleWithLoading />
    <ListBoxMultipleWithSuccess />
  </>
);
