import React from "react";
import { storiesOf } from "@storybook/react";
import SidePanel from "../src";
import { TextLine } from "./helpers";

storiesOf("SidePanel / Footer", module).add("SidePanel.Footer", () => (
  <SidePanel isOpen>
    <TextLine repeat={50} />
    <SidePanel.Footer>Footer</SidePanel.Footer>
  </SidePanel>
));

storiesOf("SidePanel / Footer", module).add("SidePanel.Footer isSticky", () => (
  <SidePanel isOpen>
    <SidePanel.Header>Header</SidePanel.Header>
    <TextLine repeat={100} />
    <SidePanel.Footer isSticky>Footer isSticky</SidePanel.Footer>
  </SidePanel>
));
