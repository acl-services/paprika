import React from "react";
import DropdownMenu from "../../src";

const DropdownMenuOnCloseExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <DropdownMenu.Trigger buttonType={DropdownMenu.Trigger.types.button.RAW}>
        <button type="button" onClick={() => setIsOpen(true)}>
          {isOpen ? "Click away to close" : "Click to open"}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Item onClick={null}>Item 1</DropdownMenu.Item>
      <DropdownMenu.Item onClick={null}>Item 2</DropdownMenu.Item>
      <DropdownMenu.Item onClick={null}>Item 3</DropdownMenu.Item>
    </DropdownMenu>
  );
};

export default DropdownMenuOnCloseExample;
