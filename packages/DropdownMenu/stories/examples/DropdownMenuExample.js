import React from "react";
import { select } from "@storybook/addon-knobs";
import L10n from "@paprika/l10n";
import DropDownMenu from "../../src";

const DropDownMenuExample = props => {
  const handleConfirm = onClose => {
    onClose(false);
  };

  const handleCancel = onClose => {
    onClose(false);
  };

  return (
    <L10n locale={select("locale", ["en", "de", "es", "fr", "ja", "pt", "zh"], "en")}>
      <DropDownMenu {...props}>
        <DropDownMenu.Item onClick={() => {}}>Edit</DropDownMenu.Item>
        <DropDownMenu.Item onClick={() => {}}>Duplicate</DropDownMenu.Item>
        <DropDownMenu.Item isDestructive isDisabled onClick={() => {}}>
          Google
        </DropDownMenu.Item>
        <DropDownMenu.Item isDisabled onClick={() => {}}>
          Galvanize
        </DropDownMenu.Item>
        <DropDownMenu.Item
          isDestructive
          renderConfirmation={onClose => {
            return (
              <DropDownMenu.Confirmation
                buttonSize={select("Confirmation Button Size", ["x-small", "small", "medium", "large"], "medium")}
                confirmLabel="Delete filter"
                description="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
                onConfirm={() => handleConfirm(onClose)}
                onCancel={() => handleCancel(onClose)}
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
