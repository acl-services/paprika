import React from "react";
import { getStoryName } from "storybook/storyTree";
import AccessibilityExample from "./examples/AccessibilityExample";
import CheckboxExample from "./examples/CheckboxExample";
import FormElement from "../src/FormElement";
import { ExampleStory, exampleStoryParameters } from "./storyHelpers";
import RadioExample from "./examples/RadioExample";
import DatePickerExample from "./examples/DatePickerExample";
import ListBoxExample from "./examples/ListBoxExample";
import ButtonGroupExample from "./examples/ButtonGroupExample";
import NativeInputExample from "./examples/NativeInputExample";
import NestedExample from "./examples/NestedExample";
import HTMLExample from "./examples/HTMLExample";
import ComponentLabelExample from "./examples/ComponentLabelExample";

const storyName = getStoryName("FormElement");

export default {
  title: `${storyName}/Examples`,
  component: FormElement,
};

export const accessibilityExample = () => (
  <ExampleStory storyName="Accessibility" fileName="examples/AccessibilityExample.js">
    <AccessibilityExample />
  </ExampleStory>
);
accessibilityExample.story = { name: "Accessibility", parameters: exampleStoryParameters };

export const checkboxExample = () => (
  <ExampleStory storyName="Checkbox" fileName="examples/CheckboxExample.js">
    <CheckboxExample />
  </ExampleStory>
);
checkboxExample.story = { name: "Checkbox", parameters: exampleStoryParameters };

export const radioExample = () => (
  <ExampleStory storyName="Radio" fileName="examples/RadioExample.js">
    <RadioExample />
  </ExampleStory>
);
radioExample.story = { name: "Radio", parameters: exampleStoryParameters };

export const datePickerExample = () => (
  <ExampleStory storyName="DatePicker" fileName="examples/DatePickerExample.js">
    <DatePickerExample />
  </ExampleStory>
);
datePickerExample.story = { name: "DatePicker", parameters: exampleStoryParameters };

export const listBoxExample = () => (
  <ExampleStory storyName="ListBox" fileName="examples/ListBoxExample.js">
    <ListBoxExample />
  </ExampleStory>
);
listBoxExample.story = { name: "ListBox", parameters: exampleStoryParameters };

export const buttonGroupExample = () => (
  <ExampleStory storyName="ButtonGroup" fileName="examples/ButtonGroupExample.js">
    <ButtonGroupExample />
  </ExampleStory>
);
buttonGroupExample.story = { name: "ButtonGroup", parameters: exampleStoryParameters };

export const nativeInputExample = () => (
  <ExampleStory storyName="Native Input" fileName="examples/NativeInputExample.js">
    <NativeInputExample />
  </ExampleStory>
);
nativeInputExample.story = { name: "Native Input", parameters: exampleStoryParameters };

export const nestedExample = () => (
  <ExampleStory storyName="Nested" fileName="examples/NestedExample.js">
    <NestedExample />
  </ExampleStory>
);
nestedExample.story = { name: "Nested", parameters: exampleStoryParameters };

export const htmlExample = () => (
  <ExampleStory storyName="HTML" fileName="examples/HTMLExample.js">
    <HTMLExample />
  </ExampleStory>
);
htmlExample.story = { name: "HTML", parameters: exampleStoryParameters };

export const componentLabelExample = () => (
  <ExampleStory storyName="Component Label" fileName="examples/ComponentLabelExample.js">
    <ComponentLabelExample />
  </ExampleStory>
);
componentLabelExample.story = { name: "Component Label", parameters: exampleStoryParameters };
