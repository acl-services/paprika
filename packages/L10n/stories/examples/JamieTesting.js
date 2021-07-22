import React from "react";
import L10n from "../../src";
import SomePaprikaComponent from "./SomePaprikaComponent";

export default function JamieTesting() {
  return (
    <L10n locale="fr">
      <h1>Hello World</h1>
      <SomePaprikaComponent />
    </L10n>
  );
}
