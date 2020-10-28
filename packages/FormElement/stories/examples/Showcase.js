import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import Heading from "@paprika/heading";
import Input from "@paprika/input";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import { FormElementStory } from "../FormElement.stories.styles";
import FormElement, { useFormElement, Label, Instructions, Content, Description, Error, Help } from "../../src";

const getKnobs = () => ({
  hasOptionalLabel: boolean("hasOptionalLabel", false),
  hasRequiredLabel: boolean("hasRequiredLabel", false),
  isDisabled: boolean("isDisabled", false),
  isInline: boolean("isInline", false),
  isLabelVisuallyHidden: boolean("isLabelVisuallyHidden", false),
  isReadOnly: boolean("isReadOnly", false),
  label: text("label", "Form element"),
  size: select("size", ShirtSizes.DEFAULT, "medium"),
});

const errorPropKnobs = () => ({
  errorText: text("error text", ""),
});

const instructionsPropKnobs = () => ({
  instructionsText: text(
    "instructions text",
    "Instructions Text Instructions Text Instructions Text Instructions Text Instructions Text Instructions Text Instructions Text Instructions Text Instructions Text."
  ),
});

const descriptionPropKnobs = () => ({
  descriptionText: text("description text", "Description of this field."),
});

const helpPropKnobs = () => ({
  helpText: text("help text", "Give me some help."),
});

const Showcase = props => {
  const [value, setValue] = React.useState("");

  const { inputA11yProps, formElementA11yProps } = useFormElement();

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <FormElementStory>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Form Element.</Tagline>
      <Rule />
      <FormElement {...props} formElementA11yProps={formElementA11yProps}>
        <Label>{props.label}</Label>
        <Instructions>{instructionsPropKnobs().instructionsText}</Instructions>
        <Content>
          <Input
            onChange={handleChange}
            value={value}
            placeholder="Form placeholder"
            aria-required={props.hasRequiredLabel}
            hasError={Boolean(errorPropKnobs().errorText)}
            isDisabled={props.isDisabled}
            isReadOnly={props.isReadOnly}
            size={props.size}
            {...inputA11yProps}
          />
        </Content>
        <Error>{errorPropKnobs().errorText}</Error>
        <Description>
          <span>{descriptionPropKnobs().descriptionText}</span>
        </Description>
        <Help>{helpPropKnobs().helpText}</Help>
      </FormElement>
    </FormElementStory>
  );
};

export default () => <Showcase {...getKnobs()} />;
