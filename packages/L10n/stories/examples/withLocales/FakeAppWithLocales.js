import React from "react";
import L10n from "../../../src/L10n";
import Locales from "./Locales";
import Greeting from "./Greeting";

export default function FakeAppWithLocales() {
  return (
    <L10n locale="en" locales={Locales}>
      <Greeting />
    </L10n>
  );
}
