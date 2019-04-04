import React from "react";
import { string } from "prop-types";
import L10n from "../../L10n";
import SomePaprikaComponentThatUsesLocalization from "./SomePaprikaComponentThatUsesLocalization";

const propTypes = {
  locale: string.isRequired,
};

export default function FakeAppWithContext(props) {
  return (
    <L10n locale={props.locale}>
      <h1>Hello World</h1>
      <SomePaprikaComponentThatUsesLocalization />
    </L10n>
  );
}

FakeAppWithContext.propTypes = propTypes;
