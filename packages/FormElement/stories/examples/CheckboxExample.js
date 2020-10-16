import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
import Checkbox from "@paprika/checkbox";
import FormElement from "../../src/FormElement";

export default function CheckboxExample() {
  const isDisabled = false;
  const size = constants.size.MEDIUM;
  const optionsArray = ["Black Panther", "Wonder Woman", "Spiderman", "The Incredibles", "Thor", <span>test</span>];

  const getCheckboxOptions = ariaDescribedBy =>
    optionsArray.map(hero => (
      <Checkbox ariaDescribedBy={ariaDescribedBy} key={hero} onChange={() => {}} isDisabled={isDisabled} size={size}>
        {hero}
      </Checkbox>
    ));

  return (
    <FormElement hasFieldSet label="Form Label">
      <FormElement.Content>
        {({ ariaDescribedBy: ariaDescribedByOuter }) => getCheckboxOptions(ariaDescribedByOuter)}
      </FormElement.Content>
    </FormElement>
  );
}
