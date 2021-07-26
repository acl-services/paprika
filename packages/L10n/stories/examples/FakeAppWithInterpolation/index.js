import React from "react";
import L10n from "../../../src/L10n";
import Locales from "./Locales";
import SomeComponent from "./SomeComponent";

export default function FakeAppWithLocales() {
  return (
    <L10n locale="en" locales={Locales}>
      <SomeComponent />
    </L10n>
  );
}
