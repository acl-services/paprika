import React from "react";
import Button from "@paprika/button";
import Panel from "../../../Panel";
import FormElement from "../../src";

function HelpContent() {
  return <>Some help text</>;
}

function SpecificPanel({ isOpen, onTriggerClick, onPanelClose, children }) {
  return (
    <Panel a11yText="Panel View" isOpen={isOpen} onClose={onPanelClose}>
      <Panel.Overlay />
      <Panel.Trigger kind="primary" onClick={onTriggerClick}>
        {isOpen ? "Close" : "Open"}
      </Panel.Trigger>
      <Panel.Header>Header</Panel.Header>
      <Panel.Content>{children}</Panel.Content>
      <Panel.Footer>
        <Button>Default action</Button>
        <Button kind="minor">Cancel</Button>
      </Panel.Footer>
    </Panel>
  );
}

export default function LabelWithHelpInsidePanel() {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <SpecificPanel onTriggerClick={toggle} onPanelClose={toggle} isOpen={isOpen}>
      <FormElement>
        <FormElement.Label help={<HelpContent />} zIndex={11}>
          Test label
        </FormElement.Label>
      </FormElement>
    </SpecificPanel>
  );
}
