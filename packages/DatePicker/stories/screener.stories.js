import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import L10n from "@paprika/l10n";
import Calendar from "../src/components/Calendar";
import ShortCutPanel from "../src/components/ShortcutPanel";

const noop = () => {};

storiesOf("Date Picker / screener", module)
  .add("Calendar", () => (
    <L10n>
      <Calendar date={moment("2019-01-01", "YYYY-MM-DD")} isOpen onSelect={noop} />
    </L10n>
  ))
  .add("Shortcut panel", () => (
    <L10n>
      <ShortCutPanel date={moment("2019-01-01", "YYYY-MM-DD")} onCancel={noop} onConfirm={noop} />
    </L10n>
  ));
