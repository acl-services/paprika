import React from "react";
import { getStoryName } from "storybook/storyTree";
// import ExampleStory from "storybook/components/ExampleStory";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import { FormElementStory } from "./FormElement.stories.styles";
import Radio from "./examples/Radio";
import Accessibility from "./examples/Accessibility";
import Checkbox from "./examples/Checkbox";
import DatePicker from "./examples/DatePicker";
import ListBox from "./examples/ListBox";
import ButtonGroup from "./examples/ButtonGroup";
import NativeInput from "./examples/NativeInput";
import Nested from "./examples/Nested";
import HTML from "./examples/HTML";
import ComponentLabel from "./examples/ComponentLabel";
import FormElement from "../src/FormElement";

const storyName = getStoryName("FormElement");

export default {
  title: `${storyName}/Examples`,
  component: FormElement,
};

export const accessibilityExample = () => (
  <FormElementStory storyName="Accessibility" component="FormElement" fileName="examples/Accessibility.js">
    <Accessibility />
  </FormElementStory>
);
accessibilityExample.story = {
  name: "Accessibility",
  parameters: exampleStoryParameters,
};

export const checkboxExample = () => (
  <FormElementStory storyName="Checkbox" component="FormElement" fileName="examples/Checkbox.js">
    <Checkbox />
  </FormElementStory>
);
checkboxExample.story = {
  name: "Checkbox",
  parameters: exampleStoryParameters,
};

export const radioExample = () => (
  <FormElementStory storyName="Radio" component="FormElement" fileName="examples/Radio.js">
    <Radio />
  </FormElementStory>
);
radioExample.story = {
  name: "Radio",
  parameters: exampleStoryParameters,
};

export const datePickerExample = () => (
  <FormElementStory storyName="DatePicker" component="FormElement" fileName="examples/DatePicker.js">
    <DatePicker />
  </FormElementStory>
);
datePickerExample.story = {
  name: "DatePicker",
  parameters: exampleStoryParameters,
};

export const listBoxExample = () => (
  <FormElementStory storyName="ListBox" component="FormElement" fileName="examples/ListBox.js">
    <ListBox />
  </FormElementStory>
);
listBoxExample.story = {
  name: "ListBox",
  parameters: exampleStoryParameters,
};

export const buttonGroupExample = () => (
  <FormElementStory storyName="ButtonGroup" component="FormElement" fileName="examples/ButtonGroup.js">
    <ButtonGroup />
  </FormElementStory>
);
buttonGroupExample.story = {
  name: "ButtonGroup",
  parameters: exampleStoryParameters,
};

export const nativeInputExample = () => (
  <FormElementStory storyName="Native Input" component="FormElement" fileName="examples/NativeInput.js">
    <NativeInput />
  </FormElementStory>
);
nativeInputExample.story = {
  name: "Native Input",
  parameters: exampleStoryParameters,
};

export const nestedExample = () => (
  <FormElementStory storyName="Nested" component="FormElement" fileName="examples/Nested.js">
    <Nested />
  </FormElementStory>
);
nestedExample.story = {
  name: "Nested FormElements (hasFieldSet)",
  parameters: exampleStoryParameters,
};

export const htmlExample = () => (
  <FormElementStory storyName="HTML" component="FormElement" fileName="examples/HTML.js">
    <HTML />
  </FormElementStory>
);
htmlExample.story = {
  name: "HTML Label",
  parameters: exampleStoryParameters,
};

export const componentLabelExample = () => (
  <FormElementStory storyName="Component Label" component="FormElement" fileName="examples/ComponentLabel.js">
    <ComponentLabel />
  </FormElementStory>
);
componentLabelExample.story = {
  name: "Component Label",
  parameters: exampleStoryParameters,
};
