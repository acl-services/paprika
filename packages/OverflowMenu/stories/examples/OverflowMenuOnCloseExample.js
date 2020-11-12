import React from "react";
import OverflowMenu from "../../src";

const OverflowMenuOnCloseExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <OverflowMenu
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <OverflowMenu.Trigger buttonType={OverflowMenu.Trigger.types.button.RAW}>
        <button type="button" onClick={() => setIsOpen(true)}>
          {isOpen ? "Click away to close" : "Click to open"}
        </button>
      </OverflowMenu.Trigger>
      <OverflowMenu.Item onClick={null}>Item 1</OverflowMenu.Item>
      <OverflowMenu.Item onClick={null}>Item 2</OverflowMenu.Item>
      <OverflowMenu.Item onClick={null}>Item 3</OverflowMenu.Item>
    </OverflowMenu>
  );
};

export default OverflowMenuOnCloseExample;
