import React from "react";

import L10n from "@paprika/l10n";
import Panels from "@paprika/panels";
import { TextLine } from "../../../../Panels/stories/helpers";
import Toast from "../../../src";

export default function ToastFixedSidePanel() {
  return (
    <L10n locale="en">
      <Panels isOpen>
        <Panels.Overlay />
        <Toast isFixed zIndex={10000}>
          Fixed Toast inside side panel
        </Toast>
        <TextLine repeat={100} />
      </Panels>
    </L10n>
  );
}
