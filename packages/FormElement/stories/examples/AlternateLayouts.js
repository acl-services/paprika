/* eslint-disable react/jsx-wrap-multilines */

import React from "react";
import Heading from "@paprika/heading";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import Input from "@paprika/input";
import Checkbox from "@paprika/checkbox";
import Radio from "@paprika/radio";
import DatePicker from "@paprika/date-picker";
import ListBox from "@paprika/listbox";
import ButtonGroup from "@paprika/button-group";
import { action } from "@storybook/addon-actions";
import FormElement from "../../src";
import { FormElementStory } from "../FormElement.stories.styles";

const ExampleStory = () => {
  const hasRequiredLabel = false;
  const errorText = "";
  const isDisabled = false;
  const isReadOnly = false;
  const size = ShirtSizes.MEDIUM;
  const optionsArray = ["Black Panther", "Wonder Woman", "Spiderman", "The Incredibles", "Thor", <span>test</span>];
  const buttonOptionsArray = ["Black Panther", "Wonder Woman", "Spiderman", "The Incredibles", "Thor"];
  const refButtonGroup = React.useRef(null);

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
          <Input
            onChange={handleChange}
            value={value}
            placeholder="Form placeholder"
            aria-required={hasRequiredLabel}
            hasError={Boolean(errorText.length)}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            size={size}
          />
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
      <FormElement hasFieldSet label="Form Label">
        <FormElement.Content>
          {optionsArray.map(hero => (
            <Checkbox key={hero} onChange={() => {}} isDisabled={isDisabled} size={size}>
              {hero}
            </Checkbox>
          ))}
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
      <Tagline>Form Element with radios.</Tagline>
      <br />
      <FormElement hasFieldSet label="Form Label">
        <FormElement.Content>
          <Radio.Group
            onChange={activeIndex => {
              action(`Radio index selected is ${activeIndex}`)();
            }}
          >
            {optionsArray.map(hero => (
              <Radio key={hero} isDisabled={isDisabled} size={size}>
                {hero}
              </Radio>
            ))}
          </Radio.Group>
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
      <Tagline>Form Element with Date Picker.</Tagline>
      <br />
      <FormElement label="Form Label">
        <FormElement.Content>
          <DatePicker onError={() => {}} hasError={Boolean(errorText.length)} onChange={() => {}}>
            <DatePicker.Input />
          </DatePicker>
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
          <ListBox>
            {optionsArray.map(hero => (
              <ListBox.Option key={hero}>{hero}</ListBox.Option>
            ))}
          </ListBox>
        </FormElement.Content>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>

      <Rule />

      <Tagline>Form Element with ButtonGroup.</Tagline>
      <br />
      <FormElement label="Form Label" onClickLabel={() => refButtonGroup.current.focus()}>
        <FormElement.Content>
          <ButtonGroup ref={refButtonGroup}>
            {buttonOptionsArray.map(hero => (
              <ButtonGroup.Item value={hero} key={hero}>
                {hero}
              </ButtonGroup.Item>
            ))}
          </ButtonGroup>
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
          <input
            aria-required={hasRequiredLabel}
            aria-invalid={Boolean(errorText.length)}
            disabled={isDisabled}
            readOnly={isReadOnly}
          />
        </FormElement.Content>
        <FormElement.Error>{errorText}</FormElement.Error>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>

      <Rule />

      <Tagline>Form Element with multiple children.</Tagline>
      <br />
      <FormElement isDisabled={isDisabled} hasRequiredLabel={hasRequiredLabel} label="Form Label">
        <FormElement.Content>
          <input
            aria-required={hasRequiredLabel}
            aria-invalid={Boolean(errorText.length)}
            disabled={isDisabled}
            readOnly={isReadOnly}
          />
          <input
            aria-required={hasRequiredLabel}
            aria-invalid={Boolean(errorText.length)}
            disabled={isDisabled}
            readOnly={isReadOnly}
          />
        </FormElement.Content>
        <FormElement.Error>{errorText}</FormElement.Error>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>

      <Tagline>Form Element nested Form Elements.</Tagline>
      <br />
      <FormElement hasFieldSet label="Form Legend">
        <FormElement.Content>
          <FormElement isInline label="Sub Label">
            <FormElement.Content>
              <input
                aria-required={hasRequiredLabel}
                aria-invalid={Boolean(errorText.length)}
                disabled={isDisabled}
                readOnly={isReadOnly}
              />
              <input
                aria-required={hasRequiredLabel}
                aria-invalid={Boolean(errorText.length)}
                disabled={isDisabled}
                readOnly={isReadOnly}
              />
            </FormElement.Content>
            <FormElement.Error>{errorText}</FormElement.Error>
            <FormElement.Help>
              Give me some help. <a href="wegalvanize.com">Learn more</a>.
            </FormElement.Help>
          </FormElement>
          <FormElement isInline label="Sub Label 2">
            <FormElement.Content>
              <input
                aria-required={hasRequiredLabel}
                aria-invalid={Boolean(errorText.length)}
                disabled={isDisabled}
                readOnly={isReadOnly}
              />
              <input
                aria-required={hasRequiredLabel}
                aria-invalid={Boolean(errorText.length)}
                disabled={isDisabled}
                readOnly={isReadOnly}
              />
            </FormElement.Content>
            <FormElement.Error>{errorText}</FormElement.Error>
            <FormElement.Help>
              Give me some help. <a href="wegalvanize.com">Learn more</a>.
            </FormElement.Help>
          </FormElement>
        </FormElement.Content>
        <FormElement.Error>{errorText}</FormElement.Error>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>
      <Rule />
      <Tagline>Form Element using html in label</Tagline>
      <br />
      <FormElement
        hasRequiredLabel={hasRequiredLabel}
        label={<span dangerouslySetInnerHTML={{ __html: "<strong><i>Form Label</i></strong>" }} />}
      >
        <FormElement.Instructions>
          <span>
            Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example
            text for extra panel for questionnaires. Example text for extra panel for questionnaires
          </span>
        </FormElement.Instructions>
        <FormElement.Content>
          <Input
            onChange={handleChange}
            value={value}
            placeholder="Form placeholder"
            aria-required={hasRequiredLabel}
            hasError={Boolean(errorText.length)}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            size={size}
          />
        </FormElement.Content>
      </FormElement>
      <Rule />
      <Tagline>Form Element using component in label</Tagline>
      <br />
      <FormElement
        hasRequiredLabel={hasRequiredLabel}
        label={
          <Heading level={5}>
            <strong>
              <i>Form Label</i>
            </strong>
          </Heading>
        }
      >
        <FormElement.Instructions>
          <span>
            Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example
            text for extra panel for questionnaires. Example text for extra panel for questionnaires
          </span>
        </FormElement.Instructions>
        <FormElement.Content>
          <Input
            onChange={handleChange}
            value={value}
            placeholder="Form placeholder"
            aria-required={hasRequiredLabel}
            hasError={Boolean(errorText.length)}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            size={size}
          />
        </FormElement.Content>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>
    </FormElementStory>
  );
};

export default () => <ExampleStory />;
