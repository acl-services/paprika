import React from "react";
import Button from "@paprika/button";
import Panel from "../../src";
import { TextLine } from "../helpers";

export default function WithPendoPopover() {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <>
      <div
        id="pendo-designer-container"
        style={{ position: "absolute", zIndex: 10, background: "lightgray", top: "300px" }}
      >
        <h1>Pendo popover</h1>
        <input data-pka-anchor="pendo-input" />
      </div>

      <div style={{ position: "absolute", zIndex: 10, background: "lightgray", top: "600px" }}>
        <h1>Not Pendo popover</h1>
        <input data-pka-anchor="not-pendo-input" />
      </div>
      <Panel a11yText="Panel View" isOpen={isOpen} onClose={toggle}>
        <Panel.Overlay />
        <Panel.Trigger kind="primary" onClick={toggle}>
          {isOpen ? "Close" : "Open"}
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
    </>
  );
}
