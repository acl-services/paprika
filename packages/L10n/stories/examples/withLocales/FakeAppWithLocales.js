import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import L10n from "@paprika/l10n";
import Locales from "./Locales";
import Greeting from "./Greeting";

export default function FakeAppWithLocales(props) {
  return (
    <Story>
      <L10n locale={props.locale} Locales={Locales}>
        <Greeting />
      </L10n>
    </Story>
  );
}
