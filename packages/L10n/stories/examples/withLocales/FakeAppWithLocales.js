import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import FormElement, { Label } from "@paprika/form-element";
import L10n from "../../../src/L10n";
import Locales from "./Locales";
import Greeting from "./Greeting";

export default function FakeAppWithLocales(props) {
  return (
    <Story>
      <L10n locale={props.locale} locales={Locales}>
        <Greeting />
        <FormElement>
          <Label hasOptionalLabel>Translation using paprika locales</Label>
          <input />
        </FormElement>
      </L10n>
    </Story>
  );
}
