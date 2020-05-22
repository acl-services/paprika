import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import L10n from "@paprika/l10n";
import Heading from "@paprika/heading";
import DateInput from "../src";

const DateInputExample = props => {
  const [date, setDate] = React.useState(null);
  const [possibleDate, setPossibleDate] = React.useState(null);

  return (
    <React.Fragment>
      <L10n locale="en">
        <DateInput date={date} onChange={setDate} onChangePossibleDate={setPossibleDate} {...props} />
      </L10n>
      <p>Date: {date ? date.format(props.humanFormat) : <i>empty</i>}</p>
      <p>Possible date: {possibleDate ? possibleDate.format(props.humanFormat) : <i>empty</i>}</p>
    </React.Fragment>
  );
};

const Example = () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      <code>&lt;DateInput /&gt;</code>
    </Heading>
    <Tagline>
      <b>Showcase</b> – Interact with the props API
    </Tagline>
    <Rule />
    <DateInput />
  </Story>
);

storiesOf("DateInput", module).add("Showcase", () => {
  return <Example />;
});

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

    moment.locale("en");

    return <DateInputExample {...inputProps} />;
  });
