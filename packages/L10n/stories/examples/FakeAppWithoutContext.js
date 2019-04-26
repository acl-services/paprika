import React from "react";
import SomePaprikaComponent from "./SomePaprikaComponent";

export default function FakeAppWithoutContext() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <SomePaprikaComponent />
    </React.Fragment>
  );
}
