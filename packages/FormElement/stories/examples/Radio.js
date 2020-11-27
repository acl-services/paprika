import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
import { action } from "@storybook/addon-actions";
import Radio from "@paprika/radio";
import stylers from "@paprika/stylers";
import { Fieldset } from "../../src";

const { Content, Label, Description } = Fieldset;

export default function RadioExample() {
  const optionsArray = ["Black Panther", "Wonder Woman", "Spiderman", "The Incredibles", "Thor", <span>test</span>];
  const isDisabled = false;
  const size = constants.size.MEDIUM;

  const renderRadioGroup = a11yProps => (
    <Radio.Group
      style={{ marginTop: stylers.spacer(2) }}
      onChange={activeIndex => {
        action(`Radio index selected is ${activeIndex}`)();
      }}
    >
      {optionsArray.map(hero => (
        <Radio key={hero} isDisabled={isDisabled} size={size}>
          <Radio.Input {...a11yProps} />
          {hero}
        </Radio>
      ))}
    </Radio.Group>
  );
  return (
    <Fieldset>
      <Label>Form Label</Label>
      <Description>A description</Description>
      <Content>{a11yProps => renderRadioGroup(a11yProps)}</Content>
    </Fieldset>
  );
}
