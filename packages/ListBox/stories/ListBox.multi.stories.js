import React from "react";
import { getStoryName } from "storybook/storyTree";
import ExampleStory from "storybook/components/ExampleStory";
import { CustomCheckboxes } from "./examples/Multi/CustomCheckboxes";
import { ControlledAndSelected } from "./examples/Multi/ControlledAndSelected";
import { FullyControlledListBox } from "./examples/Multi/FullyControlled";
import { GroupsAndSelectedOptions } from "./examples/Multi/GroupsAndSelectedOptions";
import { UncontrolledListBox } from "./examples/Multi/Uncontrolled";
import ListBox from "../src";

const storyName = getStoryName("ListBox");

const parameters = {
  viewMode: "story",
  options: {
    isToolshown: false,
    showPanel: true,
  },
};

export default {
  title: `${storyName}/Examples/Multi`,
  component: ListBox,
};

export const CustomCheckboxesExample = () => (
  <ExampleStory component="ListBox" storyName="Custom checkboxes" fileName="examples/Multi/CustomCheckboxes.js">
    <CustomCheckboxes />
  </ExampleStory>
);

CustomCheckboxesExample.story = {
  name: "Custom Checkboxes",
  parameters,
};

export const GroupsAndSelectedOptionsExample = () => (
  <ExampleStory
    component="ListBox"
    storyName="Groups and selected options"
    fileName="examples/Multi/GroupsAndSelectedOptions.js"
  >
    <GroupsAndSelectedOptions />
  </ExampleStory>
);

GroupsAndSelectedOptionsExample.story = {
  name: "Groups and Selected Options",
  parameters,
};

export const ControlledListBox = () => (
  <ExampleStory
    component="ListBox"
    storyName="Controlled and selected"
    fileName="examples/Multi/ControlledAndSelected.js"
  >
    <ControlledAndSelected />
  </ExampleStory>
);

ControlledListBox.story = {
  name: "Controlled and selected",
  parameters,
};

export const UncontrolledListBoxExample = () => (
  <ExampleStory component="ListBox" storyName="Uncontrolled" fileName="examples/Multi/ControlledAndSelected.js">
    <UncontrolledListBox />
  </ExampleStory>
);

UncontrolledListBoxExample.story = {
  name: "Uncontrolled",
  parameters,
};

export const FullyControlledWithFilter = () => (
  <ExampleStory
    component="ListBox"
    storyName="Fully controlled with filter"
    fileName="examples/Multi/FullyControlled.js"
  >
    <FullyControlledListBox />
  </ExampleStory>
);

FullyControlledWithFilter.story = {
  name: "Fully controlled with filter",
  parameters,
};
