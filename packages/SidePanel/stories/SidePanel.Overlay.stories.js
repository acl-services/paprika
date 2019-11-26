import React from "react";
import { storiesOf } from "@storybook/react";
import SidePanel from "../src";

storiesOf("SidePanel / Overlay", module).add("SidePanel.Overlay", () => (
  <SidePanel
    onClose={() => {
      alert("callback onClose");
    }}
    isOpen
  >
    <SidePanel.Header>Header</SidePanel.Header>
    <SidePanel.Overlay />
  </SidePanel>
));
