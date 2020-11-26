import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
import Checkbox from "@paprika/checkbox";
import styled from "styled-components";
import stylers from "@paprika/stylers";
import { Fieldset } from "../../src";

const { Label, Description, Content } = Fieldset;

export default function CheckboxExample() {
  const isDisabled = false;
  const size = constants.size.MEDIUM;
  const optionsArray = ["Black Panther", "Spiderman", "Wonder Woman"];

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
    <Fieldset>
      <Label>Form Label</Label>
      <Description>A description</Description>
      <Content>{a11yProps => <CheckboxGroup>{getCheckboxOptions(a11yProps)}</CheckboxGroup>}</Content>
    </Fieldset>
  );
}
