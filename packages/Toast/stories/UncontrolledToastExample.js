import React from "react";

import L10n from "@paprika/l10n";
import Toast from "../src";

export default function UncontrolledToast() {
  return (
    <L10n locale="en">
      <Toast hasCloseButton>Uncontrolled toast component</Toast>
      <Toast canAutoClose autoCloseDelay={5000} hasCloseButton>
        Uncontrolled toast component with auto close
      </Toast>
    </L10n>
  );
}
