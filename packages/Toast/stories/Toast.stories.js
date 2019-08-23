import React from "react";
import { withKnobs, select, text, boolean, number } from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react";

import L10n from "@paprika/l10n";

import Toast from "../src";
import ControlledToastExample from "./ControlledToastExample";
import UncontrolledToastExample from "./UncontrolledToastExample";
import FixedToastExample from "./FixedToastExample";
import AllKindsExposed from "./AllKindsExposed";
import Kinds from "../src/ToastKinds";

storiesOf("Toast", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => (
    <L10n locale="en">
      <Toast
        ariaAlert={boolean("ariaAlert", false)}
        canAutoClose={boolean("canAutoClose", false)}
        autoCloseDelay={number("autoCloseDelay", 1500)}
        hasCloseButton={boolean("hasCloseButton", true)}
        isOpen={boolean("isOpen", undefined)}
        isFixed={boolean("isFixed", false)}
        kind={select(
          "kind",
          [Kinds.SUCCESS, Kinds.WARNING, Kinds.ERROR, Kinds.INFO, Kinds.LOCKED, Kinds.VISUALLY_HIDDEN],
          Kinds.INFO
        )}
        zIndex={number("zIndex", 1006)}
      >
        {text("content", "Notification")}
      </Toast>
    </L10n>
  ))
  .add("Controlled Toast", () => <ControlledToastExample />)
  .add("Uncontrolled Toast", () => <UncontrolledToastExample />)
  .add("Sticky Toast", () => <FixedToastExample />)
  .add("AllKindsExposed", () => <AllKindsExposed />);
