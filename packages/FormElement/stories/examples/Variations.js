import React from "react";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Input from "@paprika/input";
import { FormElementStory } from "../FormElement.stories.styles";
import FormElement from "../../src";

const Variations = () => {
  return (
    <FormElementStory>
      <Heading level={1} displayLevel={2} isLight>
        Variations
      </Heading>
      <Rule />
      <Tagline>Form Element sizes</Tagline>
      <br />
      <FormElement label="Form with small size" size="small">
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <Input
              id={idForLabel}
              placeholder="Form placeholder"
              aria-describedby={ariaDescribedBy}
              isDisabled={false}
              hasError={false}
            />
          )}
        </FormElement.Content>
      </FormElement>
      <FormElement label="Form with medium size" size="medium">
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <Input
              id={idForLabel}
              placeholder="Form placeholder"
              aria-describedby={ariaDescribedBy}
              isDisabled={false}
              hasError={false}
            />
          )}
        </FormElement.Content>
      </FormElement>
      <FormElement label="Form with large size" size="large">
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <Input
              id={idForLabel}
              placeholder="Form placeholder"
              aria-describedby={ariaDescribedBy}
              isDisabled={false}
              hasError={false}
            />
          )}
        </FormElement.Content>
      </FormElement>
      <Rule />
      <Tagline>Form Element with instructions.</Tagline>
      <br />
      <FormElement label="Form with instructions">
        <FormElement.Instructions>
          <span>
            Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example
            text for extra panel for questionnaires. Example text for extra panel for questionnaires
          </span>
        </FormElement.Instructions>
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <Input id={idForLabel} placeholder="Form placeholder" aria-describedby={ariaDescribedBy} hasError={false} />
          )}
        </FormElement.Content>
      </FormElement>
      <Rule />
      <Tagline>Form Element with description.</Tagline>
      <br />
      <FormElement label="Form with description">
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <Input id={idForLabel} placeholder="Form placeholder" aria-describedby={ariaDescribedBy} hasError={false} />
          )}
        </FormElement.Content>
        <FormElement.Description>
          <span>This is description text</span>
        </FormElement.Description>
      </FormElement>
      <Rule />
      <Tagline>Form Element with error.</Tagline>
      <br />
      <FormElement label="Form with error">
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <Input id={idForLabel} placeholder="Form placeholder" aria-describedby={ariaDescribedBy} hasError />
          )}
        </FormElement.Content>
        <FormElement.Error>has an error</FormElement.Error>
      </FormElement>
      <Rule />
      <Tagline>Form Element with isInline.</Tagline>
      <br />
      <FormElement label="Form with isInline" isInline>
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <Input
              id={idForLabel}
              placeholder="Form placeholder"
              aria-describedby={ariaDescribedBy}
              isDisabled={false}
              hasError={false}
            />
          )}
        </FormElement.Content>
      </FormElement>
      <Rule />
      <Tagline>Form Element with hasOptionalLabel.</Tagline>
      <br />
      <FormElement label="Form with hasOptionalLabel" hasOptionalLabel>
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <Input
              id={idForLabel}
              placeholder="Form placeholder"
              aria-describedby={ariaDescribedBy}
              isDisabled={false}
              hasError={false}
            />
          )}
        </FormElement.Content>
      </FormElement>
      <Rule />
      <Tagline>Form Element with hasRequiredLabel.</Tagline>
      <br />
      <FormElement label="Form with hasRequiredLabel" hasRequiredLabel>
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <Input
              id={idForLabel}
              placeholder="Form placeholder"
              aria-describedby={ariaDescribedBy}
              isDisabled={false}
              hasError={false}
            />
          )}
        </FormElement.Content>
      </FormElement>
      <Rule />
      <Tagline>Form Element with isDisabled.</Tagline>
      <br />
      <FormElement label="Form with isDisabled" isDisabled>
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
              placeholder="Form placeholder"
              aria-describedby={ariaDescribedBy}
              isDisabled
              hasError={false}
            />
          )}
        </FormElement.Content>
        <FormElement.Description>
          <span>This is description text</span>
        </FormElement.Description>
      </FormElement>
    </FormElementStory>
  );
};

export default () => <Variations />;
