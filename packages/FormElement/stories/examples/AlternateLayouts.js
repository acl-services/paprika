import React from "react";
import Heading from "@paprika/heading";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import Input from "@paprika/input";
import Checkbox from "@paprika/checkbox";
import Radio from "@paprika/radio";
import DatePicker from "@paprika/date-picker";
import ListBox from "@paprika/listbox";
import FormElement from "../../src";
import { FormElementStory } from "../FormElement.stories.styles";

const ExampleStory = () => {
  const hasRequiredLabel = false;
  const errorText = "";
  const isDisabled = false;
  const isReadOnly = false;
  const size = ShirtSizes.MEDIUM;
  const optionsArray = ["Black Panther", "Wonder Woman", "Spiderman", "The Incredibles", "Thor"];
  const listboxOptions = optionsArray.map(hero => <ListBox.Option key={hero}>{hero}</ListBox.Option>);
  const checkboxOptions = optionsArray.map(hero => (
    <Checkbox key={hero} onChange={() => {}} isDisabled={isDisabled} size={size}>
      {hero}
    </Checkbox>
  ));

  const radioOptions = optionsArray.map(hero => (
    <Radio key={hero} onChange={() => {}} isDisabled={isDisabled} size={size}>
      {hero}
    </Radio>
  ));

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
      <Tagline>Form Element with instructions component.</Tagline>
      <br />
      <FormElement hasRequiredLabel={hasRequiredLabel} label="Form Label">
        <FormElement.Instructions>
          <span>
            Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example
            text for extra panel for questionnaires. Example text for extra panel for questionnaires
          </span>
        </FormElement.Instructions>
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <Input
              id={idForLabel}
              onChange={handleChange}
              value={value}
              placeholder="Form placeholder"
              aria-describedby={ariaDescribedBy}
              aria-required={hasRequiredLabel}
              hasError={Boolean(errorText.length)}
              isDisabled={isDisabled}
              isReadOnly={isReadOnly}
              size={size}
            />
          )}
        </FormElement.Content>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Error>{errorText}</FormElement.Error>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>

      <Rule />

      <Tagline>Form Element with checkboxes.</Tagline>
      <br />
      <FormElement label="Form Label">
        <FormElement.Content>{checkboxOptions}</FormElement.Content>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Error>{errorText}</FormElement.Error>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>

      <Rule />

      <Tagline>Form Element with radios.</Tagline>
      <br />
      <FormElement label="Form Label">
        <FormElement.Content>{radioOptions}</FormElement.Content>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Error>{errorText}</FormElement.Error>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>

      <Rule />

      <Tagline>Form Element with Date Picker.</Tagline>
      <br />
      <FormElement label="Form Label">
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <DatePicker onError={() => {}} hasError={Boolean(errorText.length)} id={idForLabel} onChange={() => {}}>
              <DatePicker.Input aria-describedby={ariaDescribedBy} />
            </DatePicker>
          )}
        </FormElement.Content>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Error>{errorText}</FormElement.Error>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>

      <Rule />

      <Tagline>Form Element with Listbox.</Tagline>
      <br />
      <FormElement label="Form Label">
        <FormElement.Content>
          {({ refLabel }) => <ListBox refLabel={refLabel}>{listboxOptions}</ListBox>}
        </FormElement.Content>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>

      <Rule />

      <Tagline>Form Element with native input.</Tagline>
      <br />
      <FormElement isDisabled={isDisabled} hasRequiredLabel={hasRequiredLabel} label="Form Label">
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <input
              aria-required={hasRequiredLabel}
              aria-describedby={ariaDescribedBy}
              aria-invalid={Boolean(errorText.length)}
              disabled={isDisabled}
              id={idForLabel}
              readOnly={isReadOnly}
            />
          )}
        </FormElement.Content>
        <FormElement.Error>{errorText}</FormElement.Error>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>
    </FormElementStory>

    // Additionally need to show with radio component example
  );
};

export default () => <ExampleStory />;
