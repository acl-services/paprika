import React from "react";

import L10n from "@paprika/l10n";
import Toast from "../../src";

export default function AllKindsExposed() {
  return (
    <L10n locale="en">
      <Toast kind={Toast.types.kind.SUCCESS}>Success toast</Toast>
      <Toast kind={Toast.types.kind.WARNING}>Warning toast</Toast>
      <Toast kind={Toast.types.kind.ERROR}>Error toast</Toast>
      <Toast kind={Toast.types.kind.INFO}>Info toast</Toast>
      <Toast kind={Toast.types.kind.LOCKED}>Locked toast</Toast>
      <Toast kind={Toast.types.kind.VISUALLY_HIDDEN}>Visually-hidden toast</Toast>
    </L10n>
  );
}
