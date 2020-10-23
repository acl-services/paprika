import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
import Checkbox from "@paprika/checkbox";
import styled from "styled-components";
import stylers from "@paprika/stylers";
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

  const CheckboxGroup = styled.div`
    margin-top: ${stylers.spacer(2)};
  `;

  return (
    <FormElement hasFieldSet label="Form Label">
      <FormElement.Content>
        {({ ariaDescribedBy: ariaDescribedByOuter }) => (
          <CheckboxGroup>{getCheckboxOptions(ariaDescribedByOuter)}</CheckboxGroup>
        )}
      </FormElement.Content>
    </FormElement>
  );
}
