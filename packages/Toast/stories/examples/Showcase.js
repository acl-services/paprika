import React from "react";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import L10n from "@paprika/l10n";
import CodeViewer from "storybook/components/CodeViewer";
import Toast from "../../src";
import * as types from "../../src/types";

const getKnobs = () => ({
  autoCloseDelay: number("autoCloseDelay", 5000),
  canAutoClose: boolean("canAutoClose", false),
  children: text("children", "Notification"),
  hasCloseButton: boolean("hasCloseButton", true),
  isFixed: boolean("isFixed", false),
  isOpen: boolean("isOpen", undefined),
  isPolite: boolean("isPolite", false),
  kind: select(
    "kind",
    [
      types.toastKinds.SUCCESS,
      types.toastKinds.WARNING,
      types.toastKinds.ERROR,
      types.toastKinds.INFO,
      types.toastKinds.LOCKED,
      types.toastKinds.VISUALLY_HIDDEN,
    ],
    types.toastKinds.INFO
  ),
  zIndex: number("zIndex", undefined),
});

export default function Showcase() {
  const { children, ...toastProps } = getKnobs();

  return (
    <L10n locale="en">
      <CodeViewer>
        <Toast {...toastProps}>{children}</Toast>
      </CodeViewer>
    </L10n>
  );
}
