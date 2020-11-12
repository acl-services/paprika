import React from "react";
import DatePicker from "@paprika/date-picker";
import FormElement, { useFormElement, Content, Label } from "../../src";

export default function DatePickerExample() {
  const { datePickerA11yProps, formElementA11yProps } = useFormElement();
  const errorText = "";
  return (
    <FormElement formElementA11yProps={formElementA11yProps}>
      <Label>Form Label</Label>
      <Content>
        <DatePicker onError={() => {}} hasError={Boolean(errorText.length)} onChange={() => {}}>
          <DatePicker.Input {...datePickerA11yProps} />
        </DatePicker>
      </Content>
    </FormElement>
  );
}
