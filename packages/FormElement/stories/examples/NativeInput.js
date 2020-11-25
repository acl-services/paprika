import React from "react";
import FormElement from "../../src";

const { Content, Label } = FormElement;

export default function NativeInputExample() {
  return (
    <FormElement>
      <Label>Form Label</Label>
      <Content>{a11yProps => <input {...a11yProps} />}</Content>
    </FormElement>
  );
}
