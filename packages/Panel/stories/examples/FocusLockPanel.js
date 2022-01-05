import React from "react";
import Input from "@paprika/input";
import Panel from "../../src";

export default function FocusLockPanel() {
  return (
    <Panel isOpen>
      <Panel.Overlay />
      <Panel.Header>Header</Panel.Header>
      <Panel.Content>
        <Input type="text" data-autofocus />
      </Panel.Content>
    </Panel>
  );
}
