import React from "react";

import L10n from "@paprika/l10n";
import Toast from "../src";

export default function ControlledToast() {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <L10n locale="en">
      <Toast
        hasCloseButton
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        Controlled toast component
      </Toast>
    </L10n>
  );
}
