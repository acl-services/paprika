import React from "react";
import ListBox from "@paprika/list-box";
import FormElement from "../../src";

const { Label, Content, Description } = FormElement;

export default function ListBoxExample() {
  const optionsArray = ["Catwoman", "Doctor Octopus", "Thanos"];

  return (
    <FormElement>
      <Label>Form Label</Label>
      <Content>
        {a11yProps => (
          <ListBox {...a11yProps}>
            {optionsArray.map(item => (
              <ListBox.Option key={item}>{item}</ListBox.Option>
            ))}
          </ListBox>
        )}
      </Content>
      <Description>Description of this field.</Description>
    </FormElement>
  );
}
