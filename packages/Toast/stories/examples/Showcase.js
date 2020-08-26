import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import Heading from "@paprika/heading";
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

const ExampleStory = props => {
  const { children, ...toastProps } = props;

  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Toast
      </Heading>
      <Tagline>
        <big>
          <strong>Showcase</strong>
        </big>{" "}
        – Interact with the props API
      </Tagline>
      <Rule />
      <L10n locale="en">
        <CodeViewer>
          <Toast {...toastProps}>{children}</Toast>
        </CodeViewer>
      </L10n>
    </Story>
  );
};

export default () => <ExampleStory {...getKnobs()} />;
