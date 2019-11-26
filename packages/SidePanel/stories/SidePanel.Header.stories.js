import React from "react";
import { storiesOf } from "@storybook/react";
import SidePanel from "../src";

storiesOf("SidePanel / Header", module).add("SidePanel.Header", () => (
  <SidePanel
    onClose={() => {
      alert("onClose");
    }}
    isOpen
  >
    <SidePanel.Header kind="primary" level={1}>
      With Header
    </SidePanel.Header>
  </SidePanel>
));

storiesOf("SidePanel / Header", module).add("SidePanel.Header isCompact", () => (
  <SidePanel
    onClose={() => {
      alert("onClose");
    }}
    isCompact
    isOpen
  >
    <SidePanel.Header>With Header Compact</SidePanel.Header>
  </SidePanel>
));

storiesOf("SidePanel / Header", module).add("SidePanel.Header without close button", () => (
  <SidePanel isOpen>
    <SidePanel.Header hasCloseButton={false}>With Header and no Close Button</SidePanel.Header>
  </SidePanel>
));
