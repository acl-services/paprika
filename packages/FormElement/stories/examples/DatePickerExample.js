import React from "react";
import DatePicker from "@paprika/date-picker";
import FormElement from "../../src/FormElement";

export default function DatePickerExample() {
  const errorText = "";
  return (
    <FormElement label="Form Label">
      <FormElement.Content>
        {({ idForLabel, ariaDescribedBy }) => (
          <DatePicker onError={() => {}} hasError={Boolean(errorText.length)} id={idForLabel} onChange={() => {}}>
            <DatePicker.Input aria-describedby={ariaDescribedBy} />
          </DatePicker>
        )}
      </FormElement.Content>
    </FormElement>
  );
}
