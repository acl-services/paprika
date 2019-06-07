/* eslint-disable react/prop-types */
import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "@paprika/heading";
import SidePanel from "../src";

storiesOf("SidePanel / Overlay", module).add("SidePanel.Overlay", () => (
  <SidePanel
    onClose={() => {
      alert("callback onClose");
    }}
    isOpen
  >
    <SidePanel.Header>
      <Heading level={2}>Header</Heading>
    </SidePanel.Header>
    <SidePanel.Overlay />
  </SidePanel>
));
