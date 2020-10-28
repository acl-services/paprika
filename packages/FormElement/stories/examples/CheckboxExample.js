import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
import Checkbox from "@paprika/checkbox";
import styled from "styled-components";
import stylers from "@paprika/stylers";
import FormElement, { useFormElement, Content, Label } from "../../src";

export default function CheckboxExample() {
  const { checkboxA11yProps, formElementA11yProps } = useFormElement();

  const isDisabled = false;
  const size = constants.size.MEDIUM;
  const optionsArray = ["Black Panther", "Wonder Woman", "Spiderman", "The Incredibles", "Thor", <span>test</span>];

  const getCheckboxOptions = () =>
    optionsArray.map(hero => (
      <Checkbox key={hero} onChange={() => {}} isDisabled={isDisabled} size={size}>
        <Checkbox.Input {...checkboxA11yProps} />
        {hero}
      </Checkbox>
    ));

  const CheckboxGroup = styled.div`
    margin-top: ${stylers.spacer(2)};
  `;

  return (
    <FormElement hasFieldSet formElementA11yProps={formElementA11yProps}>
      <Label>Form Label</Label>
      <Content>
        <CheckboxGroup>{getCheckboxOptions()}</CheckboxGroup>
      </Content>
    </FormElement>
  );
}
