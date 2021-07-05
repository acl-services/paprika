import React from "react";

import {
  ListBoxSingleStory,
  ListBoxMultipleWithError,
  ListBoxMultipleWithLoading,
  ListBoxMultipleWithSuccess,
} from "../examples/ListBox";

export const ForScreener = () => {
  return (
    <>
      <ListBoxSingleStory />
      <ListBoxMultipleWithError />
      <ListBoxMultipleWithLoading />
      <ListBoxMultipleWithSuccess />
    </>
  );
};
