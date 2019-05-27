import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import L10n from "../../src";
import SomePaprikaComponent from "./SomePaprikaComponent";

export default function FakeAppWithContext(props) {
  return (
    <Story>
      <L10n locale={props.locale}>
        <h1>Hello World</h1>
        <SomePaprikaComponent />
      </L10n>
    </Story>
  );
}
