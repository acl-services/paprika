import React from "react";

import L10n from "@paprika/l10n";
import Toast from "../src";

export default function AllTypesExposed() {
  return (
    <L10n locale="en">
      <Toast type="success">Success toast</Toast>
      <Toast type="warning">Warning toast</Toast>
      <Toast type="error">Error toast</Toast>
      <Toast type="info">Info toast</Toast>
      <Toast type="locked">Locked toast</Toast>
      <Toast type="visually-hidden">Visually-hidden toast</Toast>
    </L10n>
  );
}
