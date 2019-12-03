import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import Heading from "@paprika/heading";
import L10n from "@paprika/l10n";

import Toast from "../../src";
import Kinds from "../../src/ToastKinds";

const exampleProps = () => ({
  autoCloseDelay: number("autoCloseDelay", 1500),
  canAutoClose: boolean("canAutoClose", false),
  collapsedLength: number("collapsedLength", 255),
  children: text("children", "Notification"),
  hasCloseButton: boolean("hasCloseButton", true),
  isFixed: boolean("isFixed", false),
  isOpen: boolean("isOpen", undefined),
  isPolite: boolean("isPolite", false),
  kind: select(
    "kind",
    [Kinds.SUCCESS, Kinds.WARNING, Kinds.ERROR, Kinds.INFO, Kinds.LOCKED, Kinds.VISUALLY_HIDDEN],
    Kinds.INFO
  ),
  zIndex: number("zIndex", 1006),
});

const ExampleStory = props => {
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
        <Toast {...props}>{text("content", "Notification")}</Toast>
      </L10n>
    </Story>
  );
};

export default () => <ExampleStory {...exampleProps()} />;
