import React from "react";
import Add from "@paprika/icon/lib/Add";
import DropdownMenu from "../../src";

const DropdownMenuTriggerExample = () => {
  return (
    <div>
      <small>
        <code>Plain text</code>
      </small>
      <div>
        <br />
        <DropdownMenu align="bottom">
          <DropdownMenu.Trigger buttonType={DropdownMenu.Trigger.types.button.RAW}>
            <p>I am a paragraph tag</p>
          </DropdownMenu.Trigger>
          <DropdownMenu.Item onClick={() => {}}>First Item</DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => {}}>Second Item</DropdownMenu.Item>
        </DropdownMenu>
      </div>
      <br />
      <small>
        <code>Custom icon</code>
      </small>
      <div>
        <br />
        <DropdownMenu align="bottom">
          <DropdownMenu.Trigger buttonType={DropdownMenu.Trigger.types.button.ICON}>
            <Add />
          </DropdownMenu.Trigger>
          <DropdownMenu.Item onClick={() => {}}>First Item</DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => {}}>Second Item</DropdownMenu.Item>
        </DropdownMenu>
      </div>
      <br />
      <small>
        <code>Small trigger button</code>
      </small>
      <div>
        <br />
        <DropdownMenu align="bottom">
          <DropdownMenu.Trigger size="small">Trigger</DropdownMenu.Trigger>
          <DropdownMenu.Item onClick={() => {}}>First Item</DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => {}}>Second Item</DropdownMenu.Item>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DropdownMenuTriggerExample;
