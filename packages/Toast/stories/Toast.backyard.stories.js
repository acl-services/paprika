import React from "react";
import { getStoryName } from "storybook/storyTree";
import Toast from "../src";
import ToastFixedSidePanel from "./examples/backyard/ToastFixedSidePanel";

const storyName = getStoryName("Toast");

export default {
  title: `${storyName}/Backyard/Sandbox`,
  component: Toast,
};

export const toastFixedSidePanel = () => <ToastFixedSidePanel />;
