import React from "react";
import { getStoryName } from "storybook/storyTree";
import Toast from "../src";
import ToastFixedPanel from "./examples/ToastFixedPanel";

const storyName = getStoryName("Toast");

export default {
  title: `${storyName}/Backyard/Sandbox`,
  component: Toast,
};

export const toastFixedPanel = () => <ToastFixedPanel />;
