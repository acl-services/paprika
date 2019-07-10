import React from "react";
import { select } from "@storybook/addon-knobs";
import L10n from "@paprika/l10n";
import DropdownMenu from "../../src";

const DropdownMenuExample = () => {
  const handleConfirm = handleCloseMenu => {
    handleCloseMenu();
  };

  const handleCancel = handleCloseMenu => {
    handleCloseMenu();
  };

  return (
    <L10n locale={select("locale", ["en", "de", "es", "fr", "ja", "pt", "zh"], "en")}>
      <DropdownMenu
        align="bottom"
        renderTrigger={({ isOpen, handleOpenMenu }) => (
          <DropdownMenu.Trigger isOpen={isOpen} handleOpenMenu={handleOpenMenu}>
            Trigger
          </DropdownMenu.Trigger>
        )}
      >
        <DropdownMenu.Item onClick={() => {}}>Edit</DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => {}}>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Item isDestructive isDisabled onClick={() => {}}>
          Google
        </DropdownMenu.Item>
        <DropdownMenu.Item isLink onClick={() => {}}>
          Is Link Item
        </DropdownMenu.Item>
        <DropdownMenu.Item isDisabled onClick={() => {}}>
          Galvanize
        </DropdownMenu.Item>
        <DropdownMenu.Divider />
        <DropdownMenu.Item
          isDestructive
          renderConfirmation={handleCloseMenu => {
            return (
              <DropdownMenu.Confirmation
                buttonSize={select("Confirmation Button Size", ["x-small", "small", "medium", "large"], "medium")}
                confirmLabel="Delete filter"
                description="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
                onConfirm={() => handleConfirm(handleCloseMenu)}
                onCancel={() => handleCancel(handleCloseMenu)}
                title="Delete filter?"
              />
            );
          }}
        >
          Delete filter
        </DropdownMenu.Item>
      </DropdownMenu>
    </L10n>
  );
};

export default DropdownMenuExample;
