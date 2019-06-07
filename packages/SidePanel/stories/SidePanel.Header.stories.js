import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "@paprika/heading";
import SidePanel from "../src";

storiesOf("SidePanel / Header", module).add("SidePanel.Header", () => (
  <SidePanel
    onClose={() => {
      alert("onClose");
    }}
    isOpen
  >
    <SidePanel.Header>
      <Heading level={2}>With Header</Heading>
    </SidePanel.Header>
  </SidePanel>
));

storiesOf("SidePanel / Header", module).add("SidePanel.Header without close button", () => (
  <SidePanel isOpen>
    <SidePanel.Header hasCloseButton={false}>
      <Heading level={2}>With Header and no Close Button</Heading>
    </SidePanel.Header>
  </SidePanel>
));
