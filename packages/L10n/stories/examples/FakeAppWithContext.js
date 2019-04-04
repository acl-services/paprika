import React from "react";
import { string } from "prop-types";
import L10n from "../../L10n";
import SomePaprikaComponent from "./SomePaprikaComponent";

const propTypes = {
  locale: string.isRequired,
};

export default function FakeAppWithContext(props) {
  return (
    <L10n locale={props.locale}>
      <h1>Hello World</h1>
      <SomePaprikaComponent />
    </L10n>
  );
}

FakeAppWithContext.propTypes = propTypes;
