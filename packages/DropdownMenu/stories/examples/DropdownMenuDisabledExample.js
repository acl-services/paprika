import React from "react";
import DropdownMenu from "../../src";

const DropdownMenuDisabledExample = () => {
  return (
    <DropdownMenu
      align="bottom"
      renderTrigger={({ isOpen, handleOpenMenu }) => (
        <DropdownMenu.Trigger isOpen={isOpen} handleOpenMenu={handleOpenMenu}>
          Trigger
        </DropdownMenu.Trigger>
      )}
    >
      <DropdownMenu.Item isDestructive isDisabled onClick={() => {}}>
        Galvanize disabled distructive
      </DropdownMenu.Item>
      <DropdownMenu.Item isDisabled onClick={() => {}}>
        Galvanize disabled
      </DropdownMenu.Item>
    </DropdownMenu>
  );
};

export default DropdownMenuDisabledExample;
