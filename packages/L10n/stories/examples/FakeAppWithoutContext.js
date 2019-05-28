import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import SomePaprikaComponent from "./SomePaprikaComponent";

export default function FakeAppWithoutContext() {
  return (
    <Story>
      <h1>Hello World</h1>
      <SomePaprikaComponent />
    </Story>
  );
}
