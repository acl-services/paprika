import React from "react";

import L10n from "@paprika/l10n";
import Toast from "../../src";

export default function ControlledToast() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isAutoCloseToastOpen, setIsAutoCloseToastOpen] = React.useState(true);

  function handleClick() {
    setIsAutoCloseToastOpen(prev => !prev);
  }

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
      <Toast
        hasCloseButton
        isOpen={isAutoCloseToastOpen}
        canAutoClose
        onClose={() => {
          setIsAutoCloseToastOpen(false);
        }}
      >
        Controlled toast component with auto close
      </Toast>
      <button type="button" onClick={handleClick}>
        Toggle Autoclose toast
      </button>
    </L10n>
  );
}
