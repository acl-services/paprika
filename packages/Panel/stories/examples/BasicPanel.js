import React from "react";
import Button from "@paprika/button";
import Panel from "../../src";
import { Nav, TextLine } from "../helpers";

export default function BasicPanel() {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <>
      <Nav />
      <Panel a11yText="Panel View" isOpen={isOpen} onClose={toggle}>
        <Panel.Overlay />
        <Panel.Trigger kind="primary" onClick={toggle}>
          {isOpen ? "close" : "open"}
        </Panel.Trigger>
        <Panel.Header>Header</Panel.Header>
        <Panel.Content>
          <TextLine repeat={100} />
        </Panel.Content>
        <Panel.Footer>
          <Button>Default action</Button>
          <Button kind="minor">Cancel</Button>
        </Panel.Footer>
      </Panel>
      <TextLine repeat={100} />
    </>
  );
}
