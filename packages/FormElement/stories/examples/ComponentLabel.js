import React from "react";
import Heading from "@paprika/heading";
import Input from "@paprika/input";
import FormElement from "../../src";

const { Label, Content } = FormElement;

export default function ComponentLabelExample() {
  return (
    <FormElement>
      <Label>
        <Heading level={4}>Form Label</Heading>
      </Label>
      <Content>{a11yProps => <Input {...a11yProps} />}</Content>
    </FormElement>
  );
}
