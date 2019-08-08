import React from "react";
import DropdownMenu from "../../src";
import Confirmation from "../../../Confirmation/src/Confirmation";

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
        Galvanize
      </DropdownMenu.Item>
      <DropdownMenu.Item
        isDestructive
        renderConfirmation={onClose => {
          return (
            <Confirmation
              isOpen
              confirmLabel="Delete filter"
              description="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
              onConfirm={() => handleConfirm(onClose)}
              onCancel={() => handleCancel(onClose)}
              heading="Delete filter 1?"
            />
          );
        }}
      >
        Delete filter 1
      </DropdownMenu.Item>
      <DropdownMenu.LinkItem link="http://www.wegalvanize.com">Galvanize Link Item</DropdownMenu.LinkItem>
      <DropdownMenu.Item isDisabled onClick={() => {}}>
        Galvanize
      </DropdownMenu.Item>
      <DropdownMenu.Divider />
      <DropdownMenu.Item
        isDestructive
        renderConfirmation={onClose => {
          return (
            <Confirmation
              isOpen
              confirmLabel="Delete filter"
              description="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
              onConfirm={() => handleConfirm(onClose)}
              onCancel={() => handleCancel(onClose)}
              heading="Delete filter 2?"
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
