import React from "react";
import RawButton from "@paprika/raw-button";
import AddIcon from "@paprika/icon/lib/Add";
import DropdownMenu from "../../src";

const DropdownMenuTriggerExample = () => {
  return (
    <div>
      <small>
        <code>Plain text</code>
      </small>
      <div>
        <br />
        <DropdownMenu
          align="bottom"
          renderTrigger={({ handleOpenMenu }) => (
            <RawButton onClick={handleOpenMenu}>
              <p>I am a paragraph tag</p>
            </RawButton>
          )}
        >
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
        <DropdownMenu
          align="bottom"
          renderTrigger={({ handleOpenMenu }) => (
            <RawButton onClick={handleOpenMenu}>
              <AddIcon aria-hidden />
            </RawButton>
          )}
        >
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
        <DropdownMenu
          align="bottom"
          renderTrigger={({ isOpen, handleOpenMenu }) => (
            <DropdownMenu.Trigger size="small" isOpen={isOpen} handleOpenMenu={handleOpenMenu}>
              Trigger
            </DropdownMenu.Trigger>
          )}
        >
          <DropdownMenu.Item onClick={() => {}}>First Item</DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => {}}>Second Item</DropdownMenu.Item>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DropdownMenuTriggerExample;
