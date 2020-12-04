import React from "react";
import { getStoryName } from "storybook/storyTree";
import { exampleStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import { FormElementStory } from "./FormElement.stories.styles";
import SubcomponentsExample from "./examples/Subcomponents";
import CheckboxExample from "./examples/Checkbox";
import RadioExample from "./examples/Radio";
import ListBoxExample from "./examples/ListBox";
import DatePickerExample from "./examples/DatePicker";
import ButtonGroupExample from "./examples/ButtonGroup";
import FieldsetExample from "./examples/Fieldset";
import InlineExample from "./examples/Inline";
import EverythingExample from "./examples/Everything";
import FormElement from "../src/FormElement";

const storyName = getStoryName("FormElement");

export default {
  title: `${storyName}/Examples`,
  component: FormElement,
};

export const subcomponentsStory = () => (
  <ExampleStory storyName="Subcomponents" component="FormElement" fileName="examples/Subcomponents.js">
    <SubcomponentsExample />
  </ExampleStory>
);
subcomponentsStory.story = {
  name: "Subcomponents",
  parameters: exampleStoryParameters,
};

export const checkboxStory = () => (
  <FormElementStory storyName="Checkboxes" component="FormElement" fileName="examples/Checkbox.js">
    <CheckboxExample />
  </FormElementStory>
);
checkboxStory.story = {
  name: "Checkboxes",
  parameters: exampleStoryParameters,
};

export const radioStory = () => (
  <FormElementStory storyName="Radios" component="FormElement" fileName="examples/Radio.js">
    <RadioExample />
  </FormElementStory>
);
radioStory.story = {
  name: "Radios",
  parameters: exampleStoryParameters,
};

export const listBoxStory = () => (
  <FormElementStory storyName="ListBox" component="FormElement" fileName="examples/ListBox.js">
    <ListBoxExample />
  </FormElementStory>
);
listBoxStory.story = {
  name: "ListBox",
  parameters: exampleStoryParameters,
};
export const datePickerStory = () => (
  <FormElementStory storyName="DatePicker" component="FormElement" fileName="examples/DatePicker.js">
    <DatePickerExample />
  </FormElementStory>
);
datePickerStory.story = {
  name: "DatePicker",
  parameters: exampleStoryParameters,
};

export const buttonGroupStory = () => (
  <FormElementStory storyName="ButtonGroup" component="FormElement" fileName="examples/ButtonGroup.js">
    <ButtonGroupExample />
  </FormElementStory>
);
buttonGroupStory.story = {
  name: "ButtonGroup",
  parameters: exampleStoryParameters,
};

export const fieldsetStory = () => (
  <FormElementStory storyName="Fieldset" component="FormElement" fileName="examples/Fieldset.js">
    <FieldsetExample />
  </FormElementStory>
);
fieldsetStory.story = {
  name: "Fieldset",
  parameters: exampleStoryParameters,
};

export const inlineStory = () => (
  <FormElementStory storyName="Inline Layout" component="FormElement" fileName="examples/Inline.js">
    <InlineExample />
  </FormElementStory>
);
inlineStory.story = {
  name: "Inline Layout",
  parameters: exampleStoryParameters,
};

export const everythingStory = () => (
  <ExampleStory storyName="Everything Bagel" component="FormElement" fileName="examples/Everything.js">
    <EverythingExample />
  </ExampleStory>
);
everythingStory.story = {
  name: "Everything Bagel",
  parameters: exampleStoryParameters,
};
