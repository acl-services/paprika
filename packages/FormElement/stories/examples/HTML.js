import React from "react";
import Input from "@paprika/input";
import FormElement from "../../src";

const { Content, Label } = FormElement;

export default function HTMLExample() {
  return (
    <FormElement>
      <Label>
        <span dangerouslySetInnerHTML={{ __html: "<strong><i>Form Label</i></strong>" }} />
      </Label>
      <Content>{a11yProps => <Input {...a11yProps} />}</Content>
    </FormElement>
  );
}
