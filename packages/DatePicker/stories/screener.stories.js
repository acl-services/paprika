import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import L10n from "@paprika/l10n";
import DatePicker from "../src/DatePicker";
import ShortCutPanel from "../src/components/ShortcutPanel";

const noop = () => {};

storiesOf("DatePicker / screener", module)
  .add("Calendar", () => (
    <L10n>
      <DatePicker.Calendar date={moment("2019-01-01", "YYYY-MM-DD")} isOpen onSelect={noop} />
    </L10n>
  ))
  .add("Shortcut panel", () => (
    <L10n>
      <ShortCutPanel date={moment("2019-01-01", "YYYY-MM-DD")} onCancel={noop} onConfirm={noop} />
    </L10n>
  ));
