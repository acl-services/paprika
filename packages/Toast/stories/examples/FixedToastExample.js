import React from "react";

import L10n from "@paprika/l10n";
import Toast from "../../src";

export default function FixedToast() {
  return (
    <L10n locale="en">
      <Toast isFixed hasCloseButton>
        Fixed toast component
      </Toast>
    </L10n>
  );
}
