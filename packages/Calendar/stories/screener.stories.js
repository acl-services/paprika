import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import L10n from "@paprika/l10n";
import SingleDateCalendar from "../src/SingleDateCalendar";
import ShortCutPanel from "../src/internal/ShortcutPanel";

const noop = () => {};

storiesOf("Calendar / screener", module)
  .add("SingleDateCalendar", () => (
    <L10n>
      <SingleDateCalendar date={moment("2019-01-01", "YYYY-MM-DD")} isOpen onSelect={noop} />
    </L10n>
  ))
  .add("Shortcut panel", () => (
    <L10n>
      <ShortCutPanel date={moment("2019-01-01", "YYYY-MM-DD")} onCancel={noop} onConfirm={noop} />
    </L10n>
  ));
