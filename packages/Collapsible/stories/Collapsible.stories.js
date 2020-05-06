import React from "react";
import { storiesOf } from "@storybook/react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { withKnobs } from "@storybook/addon-knobs";
import Heading from "@paprika/heading";

import Collapsible from "../src/Collapsible";
import Variations from "./examples/Variations";

const Example = () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      <code>&lt;Collapsible /&gt;</code>
    </Heading>
    <Tagline>
      <b>Showcase</b> – Interact with the props API
    </Tagline>
    <Rule />
    <Collapsible />
  </Story>
);

storiesOf("Collapsible", module).add("Showcase", () => {
  return <Example />;
});

storiesOf("Collapsible", module)
  .addDecorator(withKnobs)
  .add("Variations", () => <Variations />);
