import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import Heading from "@paprika/heading";
import Input from "@paprika/input";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import { FormElementStory } from "../FormElement.stories.styles";
import FormElement from "../../src";

const getKnobs = () => ({
  isDisabled: boolean("isDisabled", false),
  size: select("size", ShirtSizes.DEFAULT, "medium"),
});

const errorPropKnobs = () => ({
  errorText: text("error text", ""),
});

const labelPropKnobs = () => ({
  isVisuallyHidden: boolean("is Label Visually Hidden", false),
  hasOptionalLabel: boolean("hasOptionalLabel", false),
  hasRequiredLabel: boolean("hasRequiredLabel", false),
  label: text("label", "Form element"),
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

const { Label, Instructions, Content, Description, Error } = FormElement;

const Showcase = props => {
  const [value, setValue] = React.useState("");

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
      <FormElement {...props}>
        <Label onClick={() => console.log("label clicked")} help={helpPropKnobs().helpText} {...labelPropKnobs()}>
          {labelPropKnobs().label}
        </Label>
        <Instructions>{instructionsPropKnobs().instructionsText}</Instructions>
        <Content>
          {a11yProps => (
            <Input
              onChange={handleChange}
              value={value}
              placeholder="Form placeholder"
              aria-required={props.hasRequiredLabel}
              hasError={Boolean(errorPropKnobs().errorText)}
              isDisabled={props.isDisabled}
              size={props.size}
              {...a11yProps}
            />
          )}
        </Content>
        <Error>{errorPropKnobs().errorText}</Error>
        <Description>
          <span>{descriptionPropKnobs().descriptionText}</span>
        </Description>
      </FormElement>
    </FormElementStory>
  );
};

export default () => <Showcase {...getKnobs()} />;
