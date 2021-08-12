import React from "react";
import L10n from "../../src";
import SomePaprikaComponent from "./SomePaprikaComponent";

export default function FakeAppWithContext(props) {
  return (
    <L10n locale={props.locale}>
      Change knob and watch language switch: &nbsp;
      <SomePaprikaComponent />
    </L10n>
  );
}
