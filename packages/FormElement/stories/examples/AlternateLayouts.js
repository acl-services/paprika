import React from "react";
import Heading from "@paprika/heading";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import Input from "@paprika/input";
import Checkbox from "@paprika/checkbox";
import DatePicker from "@paprika/date-picker";
import FormElement from "../../src";
import { FormElementStory } from "../FormElement.stories.styles";

const ExampleStory = () => {
  const [value, setValue] = React.useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <FormElementStory>
      <Heading level={1} displayLevel={2} isLight>
        Alternate Layouts
      </Heading>
      <Rule />
      <Tagline>Form Element with extra panel.</Tagline>
      <Rule />
      <FormElement label="Form Label">
        <FormElement.ExtraPanel>
          <span>
            Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example
            text for extra panel for questionnaires. Example text for extra panel for questionnaires
          </span>
        </FormElement.ExtraPanel>
        <Input onChange={handleChange} value={value} placeholder="Form placeholder" />
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Error>This field cannot be blank</FormElement.Error>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>

      <Rule />

      <Tagline>Form Element with checkboxs.</Tagline>
      <Rule />
      <FormElement label="Form Label">
        <Checkbox onChange={() => {}}>Checkbox response</Checkbox>
        <Checkbox onChange={() => {}}>Checkbox response</Checkbox>
        <Checkbox onChange={() => {}}>Checkbox response</Checkbox>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Error>This field cannot be blank</FormElement.Error>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>

      <Rule />
      <Tagline>Form Element with Date Picker.</Tagline>
      <Rule />
      <FormElement label="Form Label">
        <DatePicker onChange={() => {}} />
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Error>This field cannot be blank</FormElement.Error>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>
    </FormElementStory>

    // Additionally need to show with radio component example
  );
};

export default () => <ExampleStory />;
