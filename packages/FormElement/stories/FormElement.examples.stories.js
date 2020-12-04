import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import { FormElementStory } from "./FormElement.stories.styles";
import Radio from "./examples/Radio";
import Everything from "./examples/Everything";
import Checkbox from "./examples/Checkbox";
import DatePicker from "./examples/DatePicker";
import ListBox from "./examples/ListBox";
import ButtonGroup from "./examples/ButtonGroup";
import Nested from "./examples/Nested";
import FormElement from "../src/FormElement";
import InlineContentExample from "./examples/InlineContent";

const storyName = getStoryName("FormElement");

export default {
  title: `${storyName}/Examples`,
  component: FormElement,
};

export const everythingExample = () => (
  <ExampleStory storyName="Everything Bagel" component="FormElement" fileName="examples/Everything.js">
    <Everything />
  </ExampleStory>
);
everythingExample.story = {
  name: "Everything Bagel",
  parameters: exampleStoryParameters,
};

export const checkboxExample = () => (
  <FormElementStory storyName="Checkboxes" component="FormElement" fileName="examples/Checkbox.js">
    <Checkbox />
  </FormElementStory>
);
checkboxExample.story = {
  name: "Checkboxes",
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

export const nestedExample = () => (
  <FormElementStory storyName="Nested" component="FormElement" fileName="examples/Nested.js">
    <Nested />
  </FormElementStory>
);
nestedExample.story = {
  name: "Nested FormElements (hasFieldSet)",
  parameters: exampleStoryParameters,
};

export const inlineContentExample = () => (
  <FormElementStory storyName="Inline Content" component="FormElement" fileName="examples/InlineContent.js">
    <InlineContentExample />
  </FormElementStory>
);
nestedExample.story = { name: "Nested", parameters: exampleStoryParameters };
