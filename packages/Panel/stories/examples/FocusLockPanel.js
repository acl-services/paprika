import React from "react";
import Panel from "../../src";

export default function FocusLockPanel() {
  return (
    <Panel isOpen>
      <Panel.Overlay />
      <Panel.Header>Header</Panel.Header>
      <Panel.Content>
        <input type="text" data-autofocus />
      </Panel.Content>
    </Panel>
  );
}
