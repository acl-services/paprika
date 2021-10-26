import React from "react";
import Panel from "../../src/Panel";

export default function PanelFocusLockDisabled() {
  return (
    <Panel isOpen>
      <Panel.FocusLock autoFocus={false} />
      <Panel.Header>Header</Panel.Header>
    </Panel>
  );
}
