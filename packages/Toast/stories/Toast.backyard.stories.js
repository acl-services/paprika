import React from "react";
import { getStoryName } from "storybook/storyTree";
import Toast from "../src";
import ToastFixedPanels from "./examples/backyard/ToastFixedPanels";

const storyName = getStoryName("Toast");

export default {
  title: `${storyName}/Backyard/Sandbox`,
  component: Toast,
};

export const toastFixedPanels = () => <ToastFixedPanels />;
