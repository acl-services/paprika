import React from "react";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Input from "@paprika/input";
import { FormElementStory } from "../FormElement.stories.styles";
import FormElement, { useFormElement, Label, Content, Instructions, Description, Error } from "../../src";

const Variations = () => {
  const {
    inputA11yProps: variation1InputA11yProps,
    formElementA11yProps: variation1FormElementA11yProps,
  } = useFormElement();
  const {
    inputA11yProps: variation2InputA11yProps,
    formElementA11yProps: variation2FormElementA11yProps,
  } = useFormElement();
  const {
    inputA11yProps: variation3InputA11yProps,
    formElementA11yProps: variation3FormElementA11yProps,
  } = useFormElement();
  const {
    inputA11yProps: variation4InputA11yProps,
    formElementA11yProps: variation4FormElementA11yProps,
  } = useFormElement();
  const {
    inputA11yProps: variation5InputA11yProps,
    formElementA11yProps: variation5FormElementA11yProps,
  } = useFormElement();
  const {
    inputA11yProps: variation6InputA11yProps,
    formElementA11yProps: variation6FormElementA11yProps,
  } = useFormElement();
  const {
    inputA11yProps: variation7InputA11yProps,
    formElementA11yProps: variation7FormElementA11yProps,
  } = useFormElement();
  const {
    inputA11yProps: variation8InputA11yProps,
    formElementA11yProps: variation8FormElementA11yProps,
  } = useFormElement();
  const {
    inputA11yProps: variation9InputA11yProps,
    formElementA11yProps: variation9FormElementA11yProps,
  } = useFormElement();
  const {
    inputA11yProps: variation10InputA11yProps,
    formElementA11yProps: variation10FormElementA11yProps,
  } = useFormElement();
  return (
    <FormElementStory>
      <Heading level={1} displayLevel={2} isLight>
        Variations
      </Heading>
      <Rule />
      <Tagline>Form Element sizes</Tagline>
      <br />
      <FormElement size="small" formElementA11yProps={variation1FormElementA11yProps}>
        <Label>Form with small size</Label>
        <Content>
          <Input placeholder="Form placeholder" isDisabled={false} hasError={false} {...variation1InputA11yProps} />
        </Content>
      </FormElement>
      <FormElement size="medium" formElementA11yProps={variation2FormElementA11yProps}>
        <Label>Form with medium size</Label>
        <Content>
          <Input placeholder="Form placeholder" isDisabled={false} hasError={false} {...variation2InputA11yProps} />
        </Content>
      </FormElement>
      <FormElement size="large" formElementA11yProps={variation3FormElementA11yProps}>
        <Label>Form with large size</Label>
        <Content>
          <Input placeholder="Form placeholder" isDisabled={false} hasError={false} {...variation3InputA11yProps} />
        </Content>
      </FormElement>
      <Rule />
      <Tagline>Form Element with instructions.</Tagline>
      <br />
      <FormElement formElementA11yProps={variation4FormElementA11yProps}>
        <Label>Form with instructions</Label>
        <Instructions>
          <span>
            Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example
            text for extra panel for questionnaires. Example text for extra panel for questionnaires
          </span>
        </Instructions>
        <Content>
          <Input placeholder="Form placeholder" hasError={false} {...variation4InputA11yProps} />
        </Content>
      </FormElement>
      <Rule />
      <Tagline>Form Element with description.</Tagline>
      <br />
      <FormElement formElementA11yProps={variation5FormElementA11yProps}>
        <Label>Form with description</Label>
        <Content>
          <Input placeholder="Form placeholder" hasError={false} {...variation5InputA11yProps} />
        </Content>
        <Description>
          <span>This is description text</span>
        </Description>
      </FormElement>
      <Rule />
      <Tagline>Form Element with error.</Tagline>
      <br />
      <FormElement formElementA11yProps={variation6FormElementA11yProps}>
        <Label>Form with error</Label>
        <Content>
          <Input placeholder="Form placeholder" hasError {...variation6InputA11yProps} />
        </Content>
        <Error>has an error</Error>
      </FormElement>
      <Rule />
      <Tagline>Form Element with isInline.</Tagline>
      <br />
      <FormElement isInline formElementA11yProps={variation7FormElementA11yProps}>
        <Label>Form with isInline</Label>
        <Content>
          <Input placeholder="Form placeholder" isDisabled={false} hasError={false} {...variation7InputA11yProps} />
        </Content>
      </FormElement>
      <Rule />
      <Tagline>Form Element with hasOptionalLabel.</Tagline>
      <br />
      <FormElement hasOptionalLabel formElementA11yProps={variation8FormElementA11yProps}>
        <Label>Form with hasOptionalLabel</Label>
        <Content>
          <Input placeholder="Form placeholder" isDisabled={false} hasError={false} {...variation8InputA11yProps} />
        </Content>
      </FormElement>
      <Rule />
      <Tagline>Form Element with hasRequiredLabel.</Tagline>
      <br />
      <FormElement hasRequiredLabel formElementA11yProps={variation9FormElementA11yProps}>
        <Label>Form with hasRequiredLabel</Label>
        <Content>
          <Input placeholder="Form placeholder" isDisabled={false} hasError={false} {...variation9InputA11yProps} />
        </Content>
      </FormElement>
      <Rule />
      <Tagline>Form Element with isDisabled.</Tagline>
      <br />
      <FormElement isDisabled formElementA11yProps={variation10FormElementA11yProps}>
        <Label>Form with isDisabled</Label>
        <Instructions>
          <span>
            Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example
            text for extra panel for questionnaires. Example text for extra panel for questionnaires
          </span>
        </Instructions>
        <Content>
          <Input placeholder="Form placeholder" isDisabled hasError={false} {...variation10InputA11yProps} />
        </Content>
        <Description>
          <span>This is description text</span>
        </Description>
      </FormElement>
    </FormElementStory>
  );
};

export default () => <Variations />;
