import React from "react";
import Confirmation from "@paprika/confirmation";
import OverflowMenu from "../../src";

const OverflowMenuExample = () => {
  const handleConfirm = onConfirm => {
    onConfirm();
  };

  const handleCloseConfirm = onCloseMenu => () => {
    onCloseMenu();
  };

  return (
    <OverflowMenu align="bottom">
      <OverflowMenu.Trigger>Trigger</OverflowMenu.Trigger>
      <OverflowMenu.Item onClick={() => {}}>Edit</OverflowMenu.Item>
      <OverflowMenu.Item onClick={() => {}}>Duplicate</OverflowMenu.Item>
      <OverflowMenu.Item isDestructive isDisabled onClick={() => {}}>
        Galvanize
      </OverflowMenu.Item>
      <OverflowMenu.Item
        isDestructive
        renderConfirmation={onCloseMenu => {
          return (
            <Confirmation
              body="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
              confirmLabel="Delete filter"
              heading="Delete filter 1?"
              onConfirm={handleConfirm}
              onClose={handleCloseConfirm(onCloseMenu)}
            />
          );
        }}
      >
        Delete filter 1
      </OverflowMenu.Item>
      <OverflowMenu.LinkItem link="http://www.wegalvanize.com">Galvanize Link Item</OverflowMenu.LinkItem>
      <OverflowMenu.Item isDisabled onClick={() => {}}>
        Galvanize
      </OverflowMenu.Item>
      <OverflowMenu.Divider />
      <OverflowMenu.Item
        isDestructive
        renderConfirmation={onCloseMenu => {
          return (
            <Confirmation
              body="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
              confirmLabel="Delete filter"
              heading="Delete filter 2?"
              onConfirm={handleConfirm}
              onClose={handleCloseConfirm(onCloseMenu)}
            />
          );
        }}
      >
        Delete filter 2
      </OverflowMenu.Item>
    </OverflowMenu>
  );
};

export default OverflowMenuExample;
