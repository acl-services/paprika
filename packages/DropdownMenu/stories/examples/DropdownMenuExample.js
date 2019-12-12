import React from "react";
import Confirmation from "@paprika/confirmation";
import DropdownMenu from "../../src";

const handleConfirm = onCloseMenu => onCloseConfirm => {
  onCloseConfirm();
  onCloseMenu();
};

const DropdownMenuExample = () => {
  return (
    <DropdownMenu align="bottom">
      <DropdownMenu.Trigger data-pka-anchor="dropdown-menu__trigger">Trigger</DropdownMenu.Trigger>
      <DropdownMenu.Item data-pka-anchor="edit-item-data-anchor" onClick={() => {}}>
        Edit
      </DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Duplicate</DropdownMenu.Item>
      <DropdownMenu.Item isDestructive isDisabled onClick={() => {}}>
        Galvanize
      </DropdownMenu.Item>
      <DropdownMenu.LinkItem link="http://www.wegalvanize.com">Galvanize Link Item</DropdownMenu.LinkItem>
      <DropdownMenu.LinkItem isExternal link="http://www.bbc.com">
        External link
      </DropdownMenu.LinkItem>
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
              heading="Delete filter?"
              onConfirm={handleConfirm(onCloseMenu)}
            />
          );
        }}
      >
        Delete filter
      </DropdownMenu.Item>
      {false && <DropdownMenu.Item onClick={() => {}}>Excluded</DropdownMenu.Item>}
    </DropdownMenu>
  );
};

export default DropdownMenuExample;
