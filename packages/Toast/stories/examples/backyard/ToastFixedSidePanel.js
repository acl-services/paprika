import React from "react";

import L10n from "@paprika/l10n";
import SidePanel from "@paprika/sidepanel";
import { TextLine } from "../../../../SidePanel/stories/helpers";
import Toast from "../../../src";

export default function ToastFixedSidePanel() {
  return (
    <L10n locale="en">
      <SidePanel isOpen>
        <SidePanel.Overlay />
        <Toast isFixed zIndex={10000}>
          Fixed Toast inside side panel
        </Toast>
        <TextLine repeat={100} />
      </SidePanel>
    </L10n>
  );
}
