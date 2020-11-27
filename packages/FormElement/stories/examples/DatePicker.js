import React from "react";
import DatePicker from "@paprika/date-picker";
import FormElement from "../../src";

const { Content, Label } = FormElement;

export default function DatePickerExample() {
  const errorText = "";
  return (
    <FormElement>
      <Label>Form Label</Label>
      <Content>
        {a11yProps => (
          <DatePicker onError={() => {}} hasError={Boolean(errorText.length)} onChange={() => {}}>
            <DatePicker.Input {...a11yProps} />
          </DatePicker>
        )}
      </Content>
    </FormElement>
  );
}
