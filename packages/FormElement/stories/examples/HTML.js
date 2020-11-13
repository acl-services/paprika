import React from "react";
import Input from "@paprika/input";
import FormElement, { Content } from "../../src";

export default function HTMLExample() {
  return (
    <FormElement label={<span dangerouslySetInnerHTML={{ __html: "<strong><i>Form Label</i></strong>" }} />}>
      <Content>{a11yProps => <Input {...a11yProps} />}</Content>
    </FormElement>
  );
}
