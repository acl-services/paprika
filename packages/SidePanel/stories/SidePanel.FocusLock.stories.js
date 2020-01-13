import React from "react";
import { storiesOf } from "@storybook/react";
import SidePanel from "../src";

storiesOf("SidePanel / FocusLock", module)
  .add("with disabled autofocus", () => (
    <SidePanel isOpen>
      <SidePanel.Header>Header</SidePanel.Header>
      <SidePanel.FocusLock autoFocus={false} />
      <p>autofocus disabled</p>
    </SidePanel>
  ))
  .add("with autofocus on input", () => (
    <SidePanel isOpen>
      <SidePanel.Header>Header</SidePanel.Header>
      <input type="text" data-autofocus />
    </SidePanel>
  ));
