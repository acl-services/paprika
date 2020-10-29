import React from "react";
import ListBox from "@paprika/listbox";
import FormElement, { useFormElement, Content, Label } from "../../src";

export default function ListBoxExample() {
  const { listBoxA11yProps, formElementA11yProps } = useFormElement();
  const optionsArray = ["Black Panther", "Wonder Woman", "Spiderman", "The Incredibles", "Thor", <span>test</span>];
  const listboxOptions = optionsArray.map(hero => <ListBox.Option key={hero}>{hero}</ListBox.Option>);

  return (
    <FormElement formElementA11yProps={formElementA11yProps}>
      <Label>Form Label</Label>
      <Content>
        <ListBox {...listBoxA11yProps}>{listboxOptions}</ListBox>
      </Content>
    </FormElement>
  );
}
