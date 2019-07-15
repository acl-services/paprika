import React from "react";
import { select } from "@storybook/addon-knobs";
import DropdownMenu from "../../src";

const DropdownMenuExample = () => {
  const handleConfirm = handleCloseMenu => {
    handleCloseMenu();
  };

  const handleCancel = handleCloseMenu => {
    handleCloseMenu();
  };

  return (
    <DropdownMenu
      align="bottom"
      renderTrigger={({ isOpen, handleOpenMenu }) => (
        <DropdownMenu.Trigger isOpen={isOpen} handleOpenMenu={handleOpenMenu}>
          Trigger
        </DropdownMenu.Trigger>
      )}
    >
      <DropdownMenu.Item onClick={() => {}}>Edit</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Duplicate</DropdownMenu.Item>
      <DropdownMenu.Item isDestructive isDisabled onClick={() => {}}>
        Google
      </DropdownMenu.Item>
      <DropdownMenu.Item
        isDestructive
        renderConfirmation={onClose => {
          return (
            <DropdownMenu.Confirmation
              confirmLabel="Delete filter"
              description="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
              onConfirm={() => handleConfirm(onClose)}
              onCancel={() => handleCancel(onClose)}
              title="Delete filter 1?"
            />
          );
        }}
      >
        Delete filter 1
      </DropdownMenu.Item>
      <DropdownMenu.Item isLink onClick={() => {}}>
        Is Link Item
      </DropdownMenu.Item>
      <DropdownMenu.Item isDisabled onClick={() => {}}>
        Galvanize
      </DropdownMenu.Item>
      <DropdownMenu.Divider />
      <DropdownMenu.Item
        isDestructive
        renderConfirmation={onClose => {
          return (
            <DropdownMenu.Confirmation
              confirmLabel="Delete filter"
              description="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
              onConfirm={() => handleConfirm(onClose)}
              onCancel={() => handleCancel(onClose)}
              title="Delete filter 2?"
            />
          );
        }}
      >
        Delete filter 2
      </DropdownMenu.Item>
    </DropdownMenu>
  );
};

export default DropdownMenuExample;
