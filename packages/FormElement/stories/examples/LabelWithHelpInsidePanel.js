import React from "react";
import Button from "@paprika/button";
import Panel from "../../../Panel";
import FormElement from "../../src";

export default function LabelWithHelpInsidePanel() {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <Panel a11yText="Panel View" isOpen={isOpen} onClose={toggle}>
      <Panel.Overlay />
      <Panel.Trigger kind="primary" onClick={toggle}>
        {isOpen ? "Close" : "Open"}
      </Panel.Trigger>
      <Panel.Header>Header</Panel.Header>
      <Panel.Content>
        <FormElement>
          <FormElement.Label>
            Test label <FormElement.Help zIndex={11}>Test help</FormElement.Help>
          </FormElement.Label>
        </FormElement>
      </Panel.Content>
      <Panel.Footer>
        <Button>Default action</Button>
        <Button kind="minor">Cancel</Button>
      </Panel.Footer>
    </Panel>
  );
}
