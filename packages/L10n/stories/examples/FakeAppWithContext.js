import React from "react";
import L10n from "../../L10n";
import SomePaprikaComponent from "./SomePaprikaComponent";

export default function FakeAppWithContext(props) {
  return (
    <L10n locale={props.locale}>
      <h1>Hello World</h1>
      <SomePaprikaComponent />
    </L10n>
  );
}
