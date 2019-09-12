import React from "react";
import { storiesOf } from "@storybook/react";
import SidePanel from "../src";

storiesOf("SidePanel / FocusTrap", module).add("SidePanel.FocusTrap", () => (
  <SidePanel isOpen>
    <SidePanel.Header>Header</SidePanel.Header>
    <SidePanel.FocusTrap
      initialFocus={() => {
        return document.querySelector("[data-pka-anchor='sidepanel.focustrap.input']");
      }}
    />
    <input type="text" data-pka-anchor="sidepanel.focustrap.input" />
  </SidePanel>
));
