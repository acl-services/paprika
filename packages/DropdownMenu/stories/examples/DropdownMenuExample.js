import React from "react";
import Confirmation from "@paprika/confirmation";
import DropdownMenu from "../../src";

const handleConfirm = onConfirm => {
  onConfirm();
};

const handleCloseConfirm = onCloseMenu => () => {
  onCloseMenu();
};

const noop = () => {};

const DropdownMenuExample = () => {
  return (
    <DropdownMenu align="bottom">
      <DropdownMenu.Trigger data-pka-anchor="dropdown-menu__trigger">Trigger</DropdownMenu.Trigger>
      <DropdownMenu.Item onClick={noop}>Item</DropdownMenu.Item>
      <DropdownMenu.Item isDestructive onClick={noop}>
        Item (isDestructive)
      </DropdownMenu.Item>
      <DropdownMenu.Item isDisabled onClick={noop}>
        Item (isDisabled)
      </DropdownMenu.Item>
      <DropdownMenu.Item isDestructive isDisabled onClick={noop}>
        Item (isDestructive, isDisabled)
      </DropdownMenu.Item>
      <DropdownMenu.Item
        isDestructive
        renderConfirmation={onCloseMenu => {
          return (
            <Confirmation
              body="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
              confirmLabel="confirmLabel"
              heading="heading"
              onConfirm={handleConfirm}
              onClose={handleCloseConfirm(onCloseMenu)}
            />
          );
        }}
      >
        Item (isDestructive, renderConfirmation)
      </DropdownMenu.Item>
      <DropdownMenu.LinkItem link="#">LinkItem</DropdownMenu.LinkItem>
      <DropdownMenu.LinkItem isExternal link="http://bbc.com">
        LinkItem (isExternal)
      </DropdownMenu.LinkItem>
    </DropdownMenu>
  );
};

export default DropdownMenuExample;
