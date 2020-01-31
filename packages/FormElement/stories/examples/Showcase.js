import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import Heading from "@paprika/heading";
import Input from "@paprika/input";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import { FormElementStory } from "../FormElement.stories.styles";
import FormElement from "../../src";

const formElementProps = () => ({
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

const ExampleStory = props => {
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
        <FormElement.Instructions>{instructionsPropKnobs().instructionsText}</FormElement.Instructions>
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <Input
              id={idForLabel}
              onChange={handleChange}
              value={value}
              placeholder="Form placeholder"
              aria-describedby={ariaDescribedBy}
              aria-required={props.hasRequiredLabel}
              hasError={Boolean(errorPropKnobs().errorText)}
              isDisabled={props.isDisabled}
              isReadOnly={props.isReadOnly}
              size={props.size}
            />
          )}
        </FormElement.Content>
        <FormElement.Error>{errorPropKnobs().errorText}</FormElement.Error>
        <FormElement.Description>
          <span>{descriptionPropKnobs().descriptionText}</span>
        </FormElement.Description>
        <FormElement.Help>{helpPropKnobs().helpText}</FormElement.Help>
      </FormElement>
    </FormElementStory>
  );
};

export default () => <ExampleStory {...formElementProps()} />;
