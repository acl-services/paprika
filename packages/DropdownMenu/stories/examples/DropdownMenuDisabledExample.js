import React from "react";
import DropdownMenu from "../../src";

const DropdownMenuDisabledExample = () => {
  return (
    <DropdownMenu align="bottom">
      <DropdownMenu.Trigger>Trigger</DropdownMenu.Trigger>
      <DropdownMenu.Item isDestructive isDisabled onClick={() => {}}>
        Galvanize disabled destructive
      </DropdownMenu.Item>
      <DropdownMenu.Item isDisabled onClick={() => {}}>
        Galvanize disabled
      </DropdownMenu.Item>
    </DropdownMenu>
  );
};

export default DropdownMenuDisabledExample;
