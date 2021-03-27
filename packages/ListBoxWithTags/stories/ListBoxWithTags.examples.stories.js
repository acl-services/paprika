import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import AllOptionsAreSelected from "./examples/AllOptionsAreSelected";
import Controlled from "./examples/Controlled";
import CustomTag from "./examples/CustomTag";
import FormElement from "./examples/FormElement";
import RenderTagLabel from "./examples/RenderTagLabel";
import Sizes from "./examples/Sizes";
import UIStates from "./examples/UIStates";
import Uncontrolled from "./examples/Uncontrolled";
import UncontrolledFooter from "./examples/UncontrolledFooter";
import UncontrolledUser from "./examples/UncontrolledUser";
import UncontrolledVirtualize from "./examples/Uncontrolled.virtualize";

const storyName = getStoryName("ListBoxWithTags");

// TODO: Should move to ListBoxWithTags/Examples when we add Docs, Showcase, etc
export default {
  title: storyName,
};

export const SizesStory = () => (
  <ExampleStory storyName="Sizes" component="ListBoxWithTags" fileName="examples/Sizes.js">
    <Sizes />
  </ExampleStory>
);
SizesStory.story = { name: "Sizes", parameters: exampleStoryParameters };

export const ControlledStory = () => (
  <ExampleStory storyName="Controlled" component="ListBoxWithTags" fileName="examples/Controlled.js">
    <Controlled />
  </ExampleStory>
);
ControlledStory.story = { name: "Controlled", parameters: exampleStoryParameters };

export const AllOptionsAreSelectedStory = () => (
  <ExampleStory
    storyName="All Options Are Selected"
    component="ListBoxWithTags"
    fileName="examples/AllOptionsAreSelected.js"
  >
    <AllOptionsAreSelected />
  </ExampleStory>
);
AllOptionsAreSelectedStory.story = { name: "All Options Are Selected", parameters: exampleStoryParameters };

export const CustomTagStory = () => (
  <ExampleStory storyName="Custom Tag" component="ListBoxWithTags" fileName="examples/CustomTag.js">
    <CustomTag />
  </ExampleStory>
);
CustomTagStory.story = { name: "Custom Tag", parameters: exampleStoryParameters };

export const RenderTagLabelStory = () => (
  <ExampleStory storyName="Render Tag Label" component="ListBoxWithTags" fileName="examples/RenderTagLabel.js">
    <RenderTagLabel />
  </ExampleStory>
);
RenderTagLabelStory.story = { name: "Render Tag Label", parameters: exampleStoryParameters };

export const UncontrolledStory = () => (
  <ExampleStory storyName="Uncontrolled" component="ListBoxWithTags" fileName="examples/Uncontrolled.js">
    <Uncontrolled />
  </ExampleStory>
);
UncontrolledStory.story = { name: "Uncontrolled", parameters: exampleStoryParameters };

export const UncontrolledUserStory = () => (
  <ExampleStory storyName="Uncontrolled Users" component="ListBoxWithTags" fileName="examples/UncontrolledUser.js">
    <UncontrolledUser />
  </ExampleStory>
);
UncontrolledUserStory.story = { name: "Uncontrolled Users", parameters: exampleStoryParameters };

export const UncontrolledVirtualizeStory = () => (
  <ExampleStory
    storyName="Uncontrolled Virtualize"
    component="ListBoxWithTags"
    fileName="examples/Uncontrolled.virtualize.js"
  >
    <UncontrolledVirtualize />
  </ExampleStory>
);
UncontrolledVirtualizeStory.story = { name: "Uncontrolled Virtualize", parameters: exampleStoryParameters };

export const UncontrolledFooterStory = () => (
  <ExampleStory
    storyName="Uncontrolled With Footer"
    component="ListBoxWithTags"
    fileName="examples/UncontrolledFooter.js"
  >
    <UncontrolledFooter />
  </ExampleStory>
);
UncontrolledFooterStory.story = { name: "Uncontrolled With Footer", parameters: exampleStoryParameters };

export const FormElementStory = () => (
  <ExampleStory storyName="With FormElement" component="ListBoxWithTags" fileName="examples/FormElement.js">
    <FormElement />
  </ExampleStory>
);
FormElementStory.story = { name: "With FormElement", parameters: exampleStoryParameters };

export const UIStatesStory = () => (
  <ExampleStory storyName="UI States" component="ListBoxWithTags" fileName="examples/UIStates.js">
    <UIStates />
  </ExampleStory>
);
UIStatesStory.story = { name: "UI States", parameters: exampleStoryParameters };
