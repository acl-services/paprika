import React from "react";
import Confirmation from "@paprika/confirmation";
import OverflowMenu from "../../src";

const handleConfirm = onConfirm => {
  onConfirm();
};

const handleCloseConfirm = onCloseMenu => () => {
  onCloseMenu();
};

const noop = () => {};

const OverflowMenuExample = () => {
  return (
    <OverflowMenu align="bottom">
      <OverflowMenu.Content data-your-custom-attribute="your-custom-attribute-value" />
      <OverflowMenu.Trigger
        data-pka-anchor="overflow-menu__trigger"
        onClick={() => {
          console.log("clicked trigger");
        }}
      >
        Trigger
      </OverflowMenu.Trigger>
      <OverflowMenu.Item onClick={noop}>Item</OverflowMenu.Item>
      <OverflowMenu.Item isDestructive onClick={noop}>
        Item (isDestructive)
      </OverflowMenu.Item>
      <OverflowMenu.Item isDisabled onClick={noop}>
        Item (isDisabled)
      </OverflowMenu.Item>
      <OverflowMenu.Item isDestructive isDisabled onClick={noop}>
        Item (isDestructive, isDisabled)
      </OverflowMenu.Item>
      <OverflowMenu.Item
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
      </OverflowMenu.Item>
      <OverflowMenu.LinkItem link="#">LinkItem</OverflowMenu.LinkItem>
      <OverflowMenu.LinkItem isExternal link="http://bbc.com">
        LinkItem (isExternal)
      </OverflowMenu.LinkItem>
    </OverflowMenu>
  );
};

export default OverflowMenuExample;
