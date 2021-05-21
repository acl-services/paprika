import React from "react";
import { action } from "@storybook/addon-actions";
import Textarea from "../../src";

function Uncontrolled() {
  return (
    <Textarea
      defaultValue="Default lorem hipsum authentic listicle freegan banjo tote bag bespoke kombucha single-origin coffee."
      onChange={event => {
        action("value changed")(event.target.value || "''");
      }}
    />
  );
}

export default Uncontrolled;
