import React from "react";
import Confirmation from "@paprika/confirmation";
import DropdownMenu from "../../src";

const DropdownMenuExample = () => {
  const handleConfirm = onCloseMenu => onCloseConfirm => {
    onCloseConfirm();
    onCloseMenu();
  };

  return (
    <DropdownMenu align="bottom">
      <DropdownMenu.Trigger>Trigger</DropdownMenu.Trigger>
      <DropdownMenu.Item onClick={() => {}}>Edit</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Duplicate</DropdownMenu.Item>
      <DropdownMenu.Item isDestructive isDisabled onClick={() => {}}>
        Galvanize
      </DropdownMenu.Item>
      <DropdownMenu.Item
        isDestructive
        renderConfirmation={onCloseMenu => {
          return (
            <Confirmation
              body="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
              confirmLabel="Delete filter"
              heading="Delete filter 1?"
              onConfirm={handleConfirm(onCloseMenu)}
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
        renderConfirmation={onCloseMenu => {
          return (
            <Confirmation
              body="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
              confirmLabel="Delete filter"
              heading="Delete filter 2?"
              onConfirm={handleConfirm(onCloseMenu)}
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
