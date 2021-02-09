import React from "react";
import { getStoryName } from "storybook/storyTree";
import Basic from "./examples/useReducer.basic";

const storyName = getStoryName("seducer");

export default {
  title: storyName,
};

export const useReducerBasic = () => <Basic />;
