import React from "react";
import FormElement, { Content } from "../../src";

export default function NativeInputExample() {
  return (
    <FormElement label="Form Label">
      <Content>{a11yProps => <input {...a11yProps} />}</Content>
    </FormElement>
  );
}
