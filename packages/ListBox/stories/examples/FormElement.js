import React from "react";
import FormElement from "@paprika/form-element";
import L10n from "@paprika/l10n";
import StoryHeading from "storybook/components/StoryHeading";
import { Gap } from "storybook/assets/styles/common.styles";
import ListBox from "../../src";

const items = ["Heirloom scenester chillwave", "Pickled paleo quinoa", "readymade hammock succulents"];

export default function FormElementExample() {
  return (
    <L10n>
      <FormElement isRequired>
        <FormElement.Label>Lorem Hipsum Label</FormElement.Label>
        <FormElement.Instructions>Scenester brunch instructions</FormElement.Instructions>
        <FormElement.Content>
          {a11yProps => (
            <ListBox hasError data-qa-anchor="listbox-demo">
              <ListBox.A11y {...a11yProps} />
              <ListBox.Filter />
              {items.map(item => (
                <ListBox.Option key={item}>{item}</ListBox.Option>
              ))}
            </ListBox>
          )}
        </FormElement.Content>
        <FormElement.Error>Error: lo-fi tumeric biodiesel</FormElement.Error>
      </FormElement>
      <Gap.Large />
      <StoryHeading level={1}>Inline / Multi-select</StoryHeading>
      <FormElement isOptional>
        <FormElement.Label>Lorem Hipsum Label</FormElement.Label>
        <FormElement.Instructions>Scenester brunch instructions</FormElement.Instructions>
        <FormElement.Content>
          {a11yProps => (
            <ListBox isMulti isInline hasError data-qa-anchor="listbox-inline-demo">
              <ListBox.A11y {...a11yProps} />
              <ListBox.Filter />
              {items.map(item => (
                <ListBox.Option key={item}>{item}</ListBox.Option>
              ))}
            </ListBox>
          )}
        </FormElement.Content>
        <FormElement.Error>Error: lo-fi tumeric biodiesel</FormElement.Error>
      </FormElement>
    </L10n>
  );
}
