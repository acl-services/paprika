import React from "react";
import { withKnobs, select, text, boolean, number } from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react";

import L10n from "@paprika/l10n";

import Toast from "../src";
import ControlledToastExample from "./ControlledToastExample";
import NotControlledToastExample from "./NotControlledToastExample";
import StickyToastExample from "./StickyToastExample";
import AllTypesExposed from "./AllTypesExposed";

storiesOf("Toast", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => (
    <L10n locale="en">
      <Toast
        ariaAlert={boolean("ariaAlert", false)}
        autoclose={boolean("autoclose", false)}
        autocloseTimeout={number("autocloseTimeout", 1500)}
        hasCloseButton={boolean("hasCloseButton", true)}
        isOpen={boolean("isOpen", undefined)}
        isSticky={boolean("isSticky", false)}
        type={select("type", ["success", "warning", "error", "info", "locked", "visually-hidden"], "info")}
        zIndex={number("zIndex", 1006)}
      >
        {text("content", "Notification")}
      </Toast>
    </L10n>
  ))
  .add("Controlled Toast", () => <ControlledToastExample />)
  .add("Not controlled Toast", () => <NotControlledToastExample />)
  .add("Sticky Toast", () => <StickyToastExample />)
  .add("AllTypesExposed", () => <AllTypesExposed />);
