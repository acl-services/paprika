import React from "react";
import FormElement, { Content, Label } from "../../src";

export default function NativeInputExample() {
  return (
    <FormElement>
      <Label>Form Label</Label>
      <Content>{a11yProps => <input {...a11yProps} />}</Content>
    </FormElement>
  );
}
