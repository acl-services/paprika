import React from "react";
import { select } from "@storybook/addon-knobs";
import L10n from "@paprika/l10n";
import DropDownMenu from "../../src";

const DropDownMenuExample = () => {
  const handleConfirm = handleCloseMenu => {
    handleCloseMenu();
  };

  const handleCancel = handleCloseMenu => {
    handleCloseMenu();
  };

  return (
    <L10n locale={select("locale", ["en", "de", "es", "fr", "ja", "pt", "zh"], "en")}>
      <DropDownMenu
        align="bottom"
        renderTrigger={({ isOpen, handleOpenMenu }) => (
          <DropDownMenu.Trigger isOpen={isOpen} handleOpenMenu={handleOpenMenu}>
            Trigger
          </DropDownMenu.Trigger>
        )}
      >
        <DropDownMenu.Item onClick={() => {}}>Edit</DropDownMenu.Item>
        <DropDownMenu.Item onClick={() => {}}>Duplicate</DropDownMenu.Item>
        <DropDownMenu.Item isDestructive isDisabled onClick={() => {}}>
          Google
        </DropDownMenu.Item>
        <DropDownMenu.Item isLink onClick={() => {}}>
          Is Link Item
        </DropDownMenu.Item>
        <DropDownMenu.Item isDisabled onClick={() => {}}>
          Galvanize
        </DropDownMenu.Item>
        <DropDownMenu.Divider />
        <DropDownMenu.Item
          isDestructive
          renderConfirmation={handleCloseMenu => {
            return (
              <DropDownMenu.Confirmation
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
        </DropDownMenu.Item>
      </DropDownMenu>
    </L10n>
  );
};

export default DropDownMenuExample;
