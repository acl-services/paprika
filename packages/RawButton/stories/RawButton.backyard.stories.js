import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import OldRef from "./examples/OldRef";

import RawButton from "../src";

const storyName = getStoryName("RawButton");

export default {
  title: `${storyName}/Backyard/Sandbox`,
  component: RawButton,
};

export const oldRef = () => <OldRef />;

oldRef.story = {
  name: "OldRef",
  parameters: exampleStoryParameters,
};
