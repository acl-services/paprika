import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import L10n from "@paprika/l10n";
import Input from "@paprika/input";
import FormElement from "../../src";

const getRootKnobs = () => ({
  size: select("size", Object.values(FormElement.types.size), FormElement.types.size.MEDIUM),
  isDisabled: boolean("isDisabled", false),
  isOptional: boolean("isOptional", false),
  isRequired: boolean("isRequired", false),
});

const getLabelKnobs = () => ({
  labelText: text("label", "Field label"),
  tooltipAlignment: select("Direction", ["top", "bottom", "left", "right"], "top"),
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

export default function Showcase() {
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
    <L10n>
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
        {errorText ? <Error size={rootProps.size}>{errorText}</Error> : <Description>{descriptionText}</Description>}
      </FormElement>
    </L10n>
  );
}
