import React from "react";
import Heading from "@paprika/heading";
import { Rule } from "storybook/assets/styles/common.styles";
import { FormElementStory } from "../FormElement.stories.styles";
import CheckboxExample from "../examples/CheckboxExample";
import RadioExample from "../examples/RadioExample";
import DatePickerExample from "../examples/DatePickerExample";
import AccessibilityExample from "../examples/AccessibilityExample";
import ListBoxExample from "../examples/ListBoxExample";
import ButtonGroupExample from "../examples/ButtonGroupExample";
import NativeInputExample from "../examples/NativeInputExample";
import NestedExample from "../examples/NestedExample";
import HTMLExample from "../examples/HTMLExample";
import ComponentLabelExample from "../examples/ComponentLabelExample";

export default function Variations() {
  return (
    <FormElementStory>
      <Heading level={1} displayLevel={2} isLight>
        Variations
      </Heading>
      <Rule />
      <AccessibilityExample />
      <Rule />
      <CheckboxExample />
      <Rule />
      <RadioExample />
      <Rule />
      <DatePickerExample />
      <Rule />
      <ListBoxExample />
      <Rule />
      <ButtonGroupExample />
      <Rule />
      <NativeInputExample />
      <Rule />
      <NestedExample />
      <Rule />
      <HTMLExample />
      <Rule />
      <ComponentLabelExample />
    </FormElementStory>
  );
}
