import React from "react";
import FormElement from "@paprika/form-element";
import L10n from "../../../src/L10n";
import Locales from "./Locales";
import Greeting from "./Greeting";

export default function FakeAppWithLocales() {
  return (
    <L10n locale="en" locales={Locales}>
      <Greeting />
      <FormElement isOptional>
        <FormElement.Label>Translation using paprika locales</FormElement.Label>
        <input />
      </FormElement>
    </L10n>
  );
}
