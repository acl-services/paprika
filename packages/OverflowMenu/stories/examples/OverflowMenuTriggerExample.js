import React from "react";
import Add from "@paprika/icon/lib/Add";
import OverflowMenu from "../../src";

const OverflowMenuTriggerExample = () => (
  <div>
    <small>
      <code>Plain text</code>
    </small>
    <div>
      <br />
      <OverflowMenu align="bottom">
        <OverflowMenu.Trigger buttonType={OverflowMenu.Trigger.types.button.RAW}>
          <p>I am a paragraph tag</p>
        </OverflowMenu.Trigger>
        <OverflowMenu.Item onClick={() => {}}>First Item</OverflowMenu.Item>
        <OverflowMenu.Item onClick={() => {}}>Second Item</OverflowMenu.Item>
      </OverflowMenu>
    </div>
    <br />
    <small>
      <code>Custom icon</code>
    </small>
    <div>
      <br />
      <OverflowMenu align="bottom">
        <OverflowMenu.Trigger buttonType={OverflowMenu.Trigger.types.button.ICON}>
          <Add />
        </OverflowMenu.Trigger>
        <OverflowMenu.Item onClick={() => {}}>First Item</OverflowMenu.Item>
        <OverflowMenu.Item onClick={() => {}}>Second Item</OverflowMenu.Item>
      </OverflowMenu>
    </div>
    <br />
    <small>
      <code>Small trigger button</code>
    </small>
    <div>
      <br />
      <OverflowMenu align="bottom">
        <OverflowMenu.Trigger size="small">Trigger</OverflowMenu.Trigger>
        <OverflowMenu.Item onClick={() => {}}>First Item</OverflowMenu.Item>
        <OverflowMenu.Item onClick={() => {}}>Second Item</OverflowMenu.Item>
      </OverflowMenu>
    </div>
  </div>
);

export default OverflowMenuTriggerExample;
