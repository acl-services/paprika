import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import FormElement from "@paprika/form-element";
import L10n from "../../../src/L10n";
import Locales from "./Locales";
import Greeting from "./Greeting";

export default function FakeAppWithLocales() {
  return (
    <Story>
      <L10n locale="en" locales={Locales}>
        <Greeting />
        <FormElement>
          <FormElement.Label hasOptionalLabel>Translation using paprika locales</FormElement.Label>
          <input />
        </FormElement>
      </L10n>
    </Story>
  );
}
