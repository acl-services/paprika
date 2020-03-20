import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import DateInput from "../src";

const DateInputExample = props => {
  const [date, setDate] = React.useState(null);
  const [possibleDate, setPossibleDate] = React.useState(null);

  return (
    <React.Fragment>
      <DateInput
        date={date}
        possibleDate={possibleDate}
        onChange={setDate}
        onChangePossibleDate={setPossibleDate}
        {...props}
      />
      <p>Date: {date ? date.format(props.humanFormat) : <i>empty</i>}</p>
      <p>Possible date: {possibleDate ? possibleDate.format(props.humanFormat) : <i>empty</i>}</p>
    </React.Fragment>
  );
};

storiesOf("DateInput", module)
  .addDecorator(withKnobs)
  .add("Basic", () => {
    const inputProps = {
      size: select("size", ["small", "medium", "large"], "medium"),
      placeholder: text("placeholder", ""),
      dateFormat: select("dateFormat", ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD"], "MM/DD/YYYY"),
      humanFormat: select("humanFormat", ["MMMM DD, YYYY", "YYYY-MM-DD"], "MMMM DD, YYYY"),
      isDisabled: boolean("isDisabled", false),
      isReadOnly: boolean("isReadOnly", false),
      hasError: boolean("hasError", false),
    };

    return <DateInputExample {...inputProps} />;
  });
