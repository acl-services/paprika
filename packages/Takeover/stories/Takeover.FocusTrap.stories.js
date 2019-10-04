import React from "react";
import { storiesOf } from "@storybook/react";
import Takeover from "../src";

storiesOf("Takeover / FocusTrap", module).add("Takeover.FocusTrap", () => (
  <Takeover isOpen>
    <Takeover.FocusTrap
      initialFocus={() => {
        return document.querySelector("[data-pka-anchor='sidepanel.focustrap.input']");
      }}
    />
    <input type="text" />
    <input type="text" data-pka-anchor="sidepanel.focustrap.input" />
  </Takeover>
));
