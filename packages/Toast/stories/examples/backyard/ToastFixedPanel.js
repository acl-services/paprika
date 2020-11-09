import React from "react";

import L10n from "@paprika/l10n";
import Panel from "@paprika/panel";
import { TextLine } from "../../../../Panel/stories/helpers";
import Toast from "../../../src";

export default function ToastFixedSidePanel() {
  return (
    <L10n locale="en">
      <Panel isOpen>
        <Panel.Overlay />
        <Toast isFixed zIndex={10000}>
          Fixed Toast inside side panel
        </Toast>
        <TextLine repeat={100} />
      </Panel>
    </L10n>
  );
}
