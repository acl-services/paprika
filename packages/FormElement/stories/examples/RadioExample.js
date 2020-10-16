import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
import { action } from "@storybook/addon-actions";
import Radio from "@paprika/radio";
import FormElement from "../../src/FormElement";

export default function RadioExample() {
  const optionsArray = ["Black Panther", "Wonder Woman", "Spiderman", "The Incredibles", "Thor", <span>test</span>];
  const isDisabled = false;
  const size = constants.size.MEDIUM;

  const getRadioOptions = ariaDescribedBy => (
    <Radio.Group
      onChange={activeIndex => {
        action(`Radio index selected is ${activeIndex}`)();
      }}
    >
      {optionsArray.map(hero => (
        <Radio ariaDescribedBy={ariaDescribedBy} key={hero} isDisabled={isDisabled} size={size}>
          {hero}
        </Radio>
      ))}
    </Radio.Group>
  );
  return (
    <FormElement hasFieldSet label="Form Label">
      <FormElement.Content>
        {({ ariaDescribedBy: ariaDescribedByOuter }) => getRadioOptions(ariaDescribedByOuter)}
      </FormElement.Content>
    </FormElement>
  );
}
