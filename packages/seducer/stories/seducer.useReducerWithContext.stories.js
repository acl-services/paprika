import React from "react";
import { getStoryName } from "storybook/storyTree";
import BasicWithContext from "./examples/useReducerWithContext.basic";

const storyName = getStoryName("seducer");

export default {
  title: storyName,
};

export const useReducerWithContextBasic = () => <BasicWithContext />;
