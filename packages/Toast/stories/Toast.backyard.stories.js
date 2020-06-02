import React from "react";
import { getStoryName } from "storybook/storyTree";
import Toast from "../src";
import ToastFixedSidePanel from "./examples/backyard/ToastFixedSidePanel";

export default {
  title: `${getStoryName("Toast")}/Backyard/Sandbox`,
  component: Toast,
};

export const toastFixedSidePanel = () => <ToastFixedSidePanel />;
