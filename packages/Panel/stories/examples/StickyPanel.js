import React from "react";
import Panel from "../../src";

import { TextLine } from "../helpers";

export default function StickyPanel() {
  return (
    <Panel isOpen>
      <Panel.Header isSticky>Header isSticky</Panel.Header>
      <Panel.Content>
        <TextLine repeat={50} />
      </Panel.Content>
      <Panel.Footer isSticky>Footer isSticky</Panel.Footer>
    </Panel>
  );
}
