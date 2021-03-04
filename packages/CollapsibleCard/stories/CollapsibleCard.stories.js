import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import CollapsibleCard from "../src/CollapsibleCard";
import Showcase from "./examples/Showcase";
import HeaderLayout from "./examples/HeaderLayout";
import Group from "./examples/Group";
import SegmentsAndBreakpoints from "./examples/SegmentsAndBreakpoints";
import RealWorld from "./examples/RealWorld";
import ControlledAndUncontrolled from "./examples/ControlledAndUncontrolled";
import Sandbox from "./examples/Sandbox";

export default {
  title: getStoryName("CollapsibleCard"),
  component: CollapsibleCard,
};

const parameters = {
  options: {
    isToolshown: true,
    showPanel: false,
  },
};

export const showcase = Showcase;
showcase.story = {
  decorators: [withKnobs],
  parameters: {
    options: {
      isToolshown: true,
      showPanel: true,
    },
  },
};

export const group = () => <Group />;
group.story = {
  parameters: {
    docs: { page: Group },
    parameters,
  },
};

export const segmentsAndBreakpoints = () => <SegmentsAndBreakpoints />;
segmentsAndBreakpoints.story = {
  parameters: {
    docs: { page: SegmentsAndBreakpoints },
    parameters,
  },
};

export const headerLayout = () => <HeaderLayout />;
headerLayout.story = {
  parameters: {
    docs: { page: HeaderLayout },
    parameters,
  },
};

export const realWorld = () => <RealWorld />;
realWorld.story = {
  parameters: {
    docs: { page: RealWorld },
    parameters,
  },
};

export const controlledAndUncontrolled = () => <ControlledAndUncontrolled />;
controlledAndUncontrolled.story = {
  parameters: {
    docs: { page: ControlledAndUncontrolled },
    parameters,
  },
};

export const sandbox = () => <Sandbox />;
sandbox.story = {
  parameters: {
    docs: { page: Sandbox },
    parameters,
  },
};
