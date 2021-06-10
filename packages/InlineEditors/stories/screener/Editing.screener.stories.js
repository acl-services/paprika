import React from "react";

import {
  ListBoxSingleStory,
  ListBoxMultipleWithError,
  ListBoxMultipleWithLoading,
  ListBoxMultipleWithSuccess,
} from "../examples/ListBox";

export const WithScreener = () => {
  return (
    <>
      <ListBoxSingleStory />
      <ListBoxMultipleWithError />
      <ListBoxMultipleWithLoading />
      <ListBoxMultipleWithSuccess />
    </>
  );
};
