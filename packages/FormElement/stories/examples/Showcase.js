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
  id: text("id", "input-id"),
  isDisabled: boolean("isDisabled", false),
  isInline: boolean("isInline", false),
  isLabelVisuallyHidden: boolean("isLabelVisuallyHidden", false),
  isReadOnly: boolean("isReadOnly", false),
  label: text("label", "Form element"),
  size: select("size", ShirtSizes.DEFAULT, "medium"),
});

const errorPropKnobs = () => ({
  showError: boolean("show error", true),
  errorText: text("error text", "This field cannot be blank."),
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
        <Input onChange={handleChange} value={value} placeholder="Form placeholder" />
        {errorPropKnobs().showError ? <FormElement.Error>{errorPropKnobs().errorText}</FormElement.Error> : null}
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>
    </FormElementStory>
  );
};

export default () => <ExampleStory {...formElementProps()} />;
