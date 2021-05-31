import React from "react";
import { action } from "@storybook/addon-actions";
import Textarea from "../../src";

export default function Controlled() {
  const [value, setValue] = React.useState(
    "Default lorem hipsum authentic listicle freegan banjo tote bag bespoke kombucha single-origin coffee."
  );

  return (
    <Textarea
      onChange={event => {
        setValue(event.target.value);
        action("value changed")(event.target.value || "''");
      }}
      value={value}
    />
  );
}
