import React from "react";
import DropdownMenu from "../../src";

const DropdownMenuDividersExample = () => {
  return (
    <DropdownMenu
      align="bottom"
      renderTrigger={({ isOpen, handleOpenMenu }) => (
        <DropdownMenu.Trigger isOpen={isOpen} handleOpenMenu={handleOpenMenu}>
          Trigger
        </DropdownMenu.Trigger>
      )}
    >
      <DropdownMenu.Item onClick={() => {}}>Item 1</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Item 2</DropdownMenu.Item>
      <DropdownMenu.Divider />
      <DropdownMenu.Item onClick={() => {}}>Item 3</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Item 4</DropdownMenu.Item>
      <DropdownMenu.Divider />
      <DropdownMenu.Item onClick={() => {}}>Item 5</DropdownMenu.Item>
    </DropdownMenu>
  );
};

export default DropdownMenuDividersExample;
