import React from "react";
import SomePaprikaComponentThatUsesLocalization from "./SomePaprikaComponentThatUsesLocalization";

export default function FakeAppWithoutContext() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <SomePaprikaComponentThatUsesLocalization />
    </React.Fragment>
  );
}
