import React from "react";
import { getStoryName } from "storybook/storyTree";
import Toast from "../src";
import ControlledToastExample from "./examples/ControlledToastExample";
import FixedToastExample from "./examples/FixedToastExample";
import UncontrolledToastExample from "./examples/UncontrolledToastExample";

const storyName = getStoryName("Toast");

const toastStoryParameters = {
  viewMode: "story",
  options: {
    isToolshown: false,
    showPanel: true,
  },
};

export default {
  title: `${storyName}/Examples`,
  component: Toast,
};

export const controlledToast = () => <ControlledToastExample />;
controlledToast.story = {
  parameters: toastStoryParameters,
};

export const uncontrolledToast = () => <UncontrolledToastExample />;
uncontrolledToast.story = {
  parameters: toastStoryParameters,
};

export const fixedToast = () => <FixedToastExample />;
fixedToast.story = {
  parameters: toastStoryParameters,
};
