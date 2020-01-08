import React from "react";
import Toast from "../src";
import ControlledToastExample from "./examples/ControlledToastExample";
import FixedToastExample from "./examples/FixedToastExample";
import UncontrolledToastExample from "./examples/UncontrolledToastExample";

const toastStoryParameters = {
  options: {
    isToolshown: false,
    showPanel: true,
  },
};

export default {
  title: "Toast/Examples",
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
