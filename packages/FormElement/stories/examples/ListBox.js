import React from "react";
import L10n from "@paprika/l10n";
import ListBox from "@paprika/list-box";
import FormElement from "../../src";

const { Label, Content, Description } = FormElement;

export default function ListBoxExample() {
  const optionsArray = ["Catwoman", "Doctor Octopus", "Thanos"];

  return (
    <L10n>
      <FormElement>
        <Label>Form Label</Label>
        <Content>
          {(a11yProps, refLabel) => (
            <ListBox>
              <ListBox.A11y {...a11yProps} refLabel={refLabel} />
              {optionsArray.map(item => (
                <ListBox.Option key={item}>{item}</ListBox.Option>
              ))}
            </ListBox>
          )}
        </Content>
        <Description>Description of this field.</Description>
      </FormElement>
    </L10n>
  );
}
