import React from "react";

import L10n from "@paprika/l10n";
import Toast from "../src";

export default function NotControlledToast() {
  return (
    <L10n locale="en">
      <Toast hasCloseButton>Not controlled toast component</Toast>
      <Toast autoclose autocloseTimeout={5000} hasCloseButton>
        Not controlled toast component with auto close
      </Toast>
    </L10n>
  );
}
