import React from "react";
import { getStoryName } from "storybook/storyTree";
import { Tagline } from "storybook/assets/styles/common.styles";
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
    <Tagline>Form Element with instructions component.</Tagline>
    <br />
    <AccessibilityExample />
  </ExampleStory>
);
accessibilityExample.story = { name: "Accessibility", parameters: exampleStoryParameters };

export const checkboxExample = () => (
  <ExampleStory storyName="Checkbox" fileName="examples/CheckboxExample.js">
    <Tagline>Form Element with checkboxes.</Tagline>
    <br />
    <CheckboxExample />
  </ExampleStory>
);
checkboxExample.story = { name: "Checkbox", parameters: exampleStoryParameters };

export const radioExample = () => (
  <ExampleStory storyName="Radio" fileName="examples/RadioExample.js">
    <Tagline>Form Element with radios.</Tagline>
    <br />
    <RadioExample />
  </ExampleStory>
);
radioExample.story = { name: "Radio", parameters: exampleStoryParameters };

export const datePickerExample = () => (
  <ExampleStory storyName="DatePicker" fileName="examples/DatePickerExample.js">
    <Tagline>Form Element with Date Picker.</Tagline>
    <br />
    <DatePickerExample />
  </ExampleStory>
);
datePickerExample.story = { name: "DatePicker", parameters: exampleStoryParameters };

export const listBoxExample = () => (
  <ExampleStory storyName="ListBox" fileName="examples/ListBoxExample.js">
    <Tagline>Form Element with Listbox.</Tagline>
    <br />
    <ListBoxExample />
  </ExampleStory>
);
listBoxExample.story = { name: "ListBox", parameters: exampleStoryParameters };

export const buttonGroupExample = () => (
  <ExampleStory storyName="ButtonGroup" fileName="examples/ButtonGroupExample.js">
    <Tagline>Form Element with ButtonGroup.</Tagline>
    <br />
    <ButtonGroupExample />
  </ExampleStory>
);
buttonGroupExample.story = { name: "ButtonGroup", parameters: exampleStoryParameters };

export const nativeInputExample = () => (
  <ExampleStory storyName="Native Input" fileName="examples/NativeInputExample.js">
    <Tagline>Form Element with native input.</Tagline>
    <br />
    <NativeInputExample />
  </ExampleStory>
);
nativeInputExample.story = { name: "Native Input", parameters: exampleStoryParameters };

export const nestedExample = () => (
  <ExampleStory storyName="Nested" fileName="examples/NestedExample.js">
    <Tagline>Form Element nested Form Elements.</Tagline>
    <br />
    <NestedExample />
  </ExampleStory>
);
nestedExample.story = { name: "Nested", parameters: exampleStoryParameters };

export const htmlExample = () => (
  <ExampleStory storyName="HTML" fileName="examples/HTMLExample.js">
    <Tagline>Form Element using html in label</Tagline>
    <br />
    <HTMLExample />
  </ExampleStory>
);
htmlExample.story = { name: "HTML", parameters: exampleStoryParameters };

export const componentLabelExample = () => (
  <ExampleStory storyName="Component Label" fileName="examples/ComponentLabelExample.js">
    <Tagline>Form Element using component in label</Tagline>
    <br />
    <ComponentLabelExample />
  </ExampleStory>
);
componentLabelExample.story = { name: "Component Label", parameters: exampleStoryParameters };
