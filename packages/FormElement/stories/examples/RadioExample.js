import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
import { action } from "@storybook/addon-actions";
import Radio from "@paprika/radio";
import stylers from "@paprika/stylers";
import FormElement, { useFormElement, Content, Label } from "../../src";

export default function RadioExample() {
  const { radioA11yProps, formElementA11yProps } = useFormElement();
  const optionsArray = ["Black Panther", "Wonder Woman", "Spiderman", "The Incredibles", "Thor", <span>test</span>];
  const isDisabled = false;
  const size = constants.size.MEDIUM;

  const renderRadioGroup = () => (
    <Radio.Group
      style={{ marginTop: stylers.spacer(2) }}
      onChange={activeIndex => {
        action(`Radio index selected is ${activeIndex}`)();
      }}
    >
      {optionsArray.map(hero => (
        <Radio key={hero} isDisabled={isDisabled} size={size} {...radioA11yProps}>
          {hero}
        </Radio>
      ))}
    </Radio.Group>
  );
  return (
    <FormElement hasFieldSet formElementA11yProps={formElementA11yProps}>
      <Label>Form Label</Label>
      <Content>{renderRadioGroup()}</Content>
    </FormElement>
  );
}
