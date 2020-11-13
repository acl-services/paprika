import React from "react";
import ListBox from "@paprika/list-box";
import FormElement, { Label, Content } from "../../src";

export default function ListBoxExample() {
  const optionsArray = ["Black Panther", "Wonder Woman", "Spiderman", "The Incredibles", "Thor", <span>test</span>];
  const listboxOptions = optionsArray.map(hero => <ListBox.Option key={hero}>{hero}</ListBox.Option>);

  return (
    <FormElement>
      <Label>Form Label</Label>
      <Content>{a11yProps => <ListBox {...a11yProps}>{listboxOptions}</ListBox>}</Content>
    </FormElement>
  );
}
