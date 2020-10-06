import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
import { Tagline } from "storybook/assets/styles/common.styles";
import Checkbox from "@paprika/checkbox";
import FormElement from "../../src/FormElement";

export default function CheckboxExample() {
  const isDisabled = false;
  const size = constants.size.MEDIUM;
  const errorText = "";
  const optionsArray = ["Black Panther", "Wonder Woman", "Spiderman", "The Incredibles", "Thor", <span>test</span>];

  const getCheckboxOptions = ariaDescribedBy =>
    optionsArray.map(hero => (
      <Checkbox ariaDescribedBy={ariaDescribedBy} key={hero} onChange={() => {}} isDisabled={isDisabled} size={size}>
        {hero}
      </Checkbox>
    ));

  return (
    <>
      <Tagline>Form Element with checkboxes.</Tagline>
      <br />
      <FormElement hasFieldSet label="Form Label">
        <FormElement.Content>
          {({ ariaDescribedBy: ariaDescribedByOuter }) => getCheckboxOptions(ariaDescribedByOuter)}
        </FormElement.Content>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Error>{errorText}</FormElement.Error>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>
    </>
  );
}
