import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
import Checkbox from "@paprika/checkbox";
import styled from "styled-components";
import stylers from "@paprika/stylers";
import FormElement, { Content, Label } from "../../src";

export default function CheckboxExample() {
  const isDisabled = false;
  const size = constants.size.MEDIUM;
  const optionsArray = ["Black Panther", "Wonder Woman", "Spiderman", "The Incredibles", "Thor", <span>test</span>];

  const getCheckboxOptions = a11yProps =>
    optionsArray.map(hero => (
      <Checkbox key={hero} onChange={() => {}} isDisabled={isDisabled} size={size}>
        <Checkbox.Input {...a11yProps} />
        {hero}
      </Checkbox>
    ));

  const CheckboxGroup = styled.div`
    margin-top: ${stylers.spacer(2)};
  `;

  return (
    <FormElement hasFieldSet>
      <Label>Form Label</Label>
      <Content>{a11yProps => <CheckboxGroup>{getCheckboxOptions(a11yProps)}</CheckboxGroup>}</Content>
    </FormElement>
  );
}
