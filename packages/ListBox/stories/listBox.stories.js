import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "@paprika/heading";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";

import ListBox from "../src";

const Example = () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      <code>&lt;ListBox /&gt;</code>
    </Heading>
    <Tagline>
      <b>Showcase</b> – Interact with the props API
    </Tagline>
    <Rule />
    <ListBox />
  </Story>
);

storiesOf("ListBox", module).add("Showcase", () => {
  return <Example />;
});
