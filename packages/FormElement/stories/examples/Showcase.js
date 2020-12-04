import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import Heading from "@paprika/heading";
import Input from "@paprika/input";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { FormElementStory } from "../FormElement.stories.styles";
import FormElement from "../../src";

const getRootKnobs = () => ({
  size: select("size", Object.values(FormElement.types.size), FormElement.types.size.MEDIUM),
  isDisabled: boolean("isDisabled", false),
  isOptional: boolean("isOptional", false),
  isRequired: boolean("isRequired", false),
});

const getLabelKnobs = () => ({
  labelText: text("label", "Field label"),
  help: text("help text", "Some help text for this field."),
  helpA11yText: text("helpA11yText", "information"),
  isVisuallyHidden: boolean("isVisuallyHidden", false),
});

const getInstructionsKnobs = () => ({
  instructionsText: text("instructions text", "Some brief instructions."),
});

const getDescriptionKnobs = () => ({
  descriptionText: text(
    "description text",
    "A more detailed description of this field and how you need to complete it."
  ),
});

const getErrorKnobs = () => ({
  errorText: text("error text", ""),
});

const { Label, Instructions, Content, Description, Error } = FormElement;

const Showcase = () => {
  const [value, setValue] = React.useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  // The order these are called determines the order of the knobs in the side panel
  const rootProps = getRootKnobs();
  const { labelText, ...labelProps } = getLabelKnobs();
  const { instructionsText } = getInstructionsKnobs();
  const { descriptionText } = getDescriptionKnobs();
  const { errorText } = getErrorKnobs();

  return (
    <FormElementStory>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Form Element.</Tagline>
      <Rule />
      <FormElement {...rootProps}>
        <Label {...labelProps}>{labelText}</Label>
        <Instructions>{instructionsText}</Instructions>
        <Content>
          {a11yProps => (
            <Input
              onChange={handleChange}
              value={value}
              hasError={Boolean(errorText)}
              size={rootProps.size}
              {...a11yProps}
            />
          )}
        </Content>
        {!errorText ? <Description>{descriptionText}</Description> : null}
        <Error>{errorText}</Error>
      </FormElement>
    </FormElementStory>
  );
};

export default () => <Showcase />;
