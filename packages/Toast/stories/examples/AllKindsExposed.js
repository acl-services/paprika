import React from "react";

import L10n from "@paprika/l10n";
import Toast from "../../src";

export default function AllKindsExposed() {
  return (
    <L10n locale="en">
      <Toast kind="success">Success toast</Toast>
      <Toast kind="warning">Warning toast</Toast>
      <Toast kind="error">Error toast</Toast>
      <Toast kind="info">Info toast</Toast>
      <Toast kind="locked">Locked toast</Toast>
      <Toast kind="visually-hidden">Visually-hidden toast</Toast>
    </L10n>
  );
}
