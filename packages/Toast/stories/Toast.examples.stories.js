import React from "react";
import Toast from "../src";
import ControlledToastExample from "./examples/ControlledToastExample";
import FixedToastExample from "./examples/FixedToastExample";
import UncontrolledToastExample from "./examples/UncontrolledToastExample";

export default {
  title: "Toast/Examples",
  component: Toast,
};

export const controlledToast = () => <ControlledToastExample />;
controlledToast.story = {
  parameters: {
    options: {
      isToolshown: true,
      showPanel: true,
    },
  },
};

export const uncontrolledToast = () => <UncontrolledToastExample />;
uncontrolledToast.story = {
  parameters: {
    options: {
      isToolshown: true,
      showPanel: false,
    },
  },
};

export const fixedToast = () => <FixedToastExample />;
fixedToast.story = {
  parameters: {
    options: {
      isToolshown: true,
      showPanel: false,
    },
  },
};
