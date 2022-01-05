import React from "react";
import Panel from "../../src";
import { TextLine } from "../helpers";

export default function CoPlanarPanel() {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <>
      <Panel isOpen={isOpen} onClose={toggle} offset={{ top: 50 }}>
        <Panel.Header isSticky>Header isSticky</Panel.Header>
        <Panel.Content>
          <TextLine repeat={50} />
        </Panel.Content>
        <Panel.Footer isSticky>Footer isSticky</Panel.Footer>
      </Panel>
      <Panel.Trigger kind="primary" onClick={toggle}>
        {isOpen ? "Close" : "Open"}
      </Panel.Trigger>
      <TextLine repeat={50} />
    </>
  );
}
