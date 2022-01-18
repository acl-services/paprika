import React from "react";
import Popover from "@paprika/popover";
import Button from "@paprika/button";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import Panel from "../../src";

export default function NestedPopoverPanel() {
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
        <Popover zIndex={11}>
          <Popover.Trigger>
            <InfoIcon />
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Card>
              <p>
                Try <a href="https://design.wegalvanize.com/">clicking this</a> with the mouse or keyboard...
              </p>
            </Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </Panel.Content>
      <Panel.Footer>
        <Button>Default action</Button>
        <Button kind="minor">Cancel</Button>
      </Panel.Footer>
    </Panel>
  );
}
