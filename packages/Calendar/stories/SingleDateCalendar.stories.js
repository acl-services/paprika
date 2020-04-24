import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import moment from "moment";
import L10n from "@paprika/l10n";
import SingleDateCalendar from "../src/SingleDateCalendar";

moment.locale("en");
const noop = () => {};

storiesOf("Calendar", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => {
    const [date, setDate] = React.useState(null);

    return (
      <L10n locale="en">
        <Story>
          <SingleDateCalendar date={date} onSelect={setDate} resetPossibleDate={noop} />
          <p>Selected date: {date ? date.format("MMMM DD, YYYY") : <i>none</i>}</p>
        </Story>
      </L10n>
    );
  });
