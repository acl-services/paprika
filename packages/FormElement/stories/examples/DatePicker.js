import React from "react";
import DatePicker from "@paprika/date-picker";
import L10n from "@paprika/l10n";
import FormElement from "../../src";

const { Label, Content, Instructions } = FormElement;

export default function DatePickerExample() {
  const [date, setDate] = React.useState();

  function handleChange(newDate) {
    setDate(newDate);
  }

  return (
    <L10n>
      <FormElement>
        <Label>Start Date</Label>
        <Instructions>Enter date in MM/DD/YYYY format.</Instructions>
        <Content>
          {a11yProps => (
            <DatePicker date={date} onChange={handleChange}>
              <DatePicker.Input placeholder="MM/DD/YYYY" {...a11yProps} />
            </DatePicker>
          )}
        </Content>
      </FormElement>
    </L10n>
  );
}
