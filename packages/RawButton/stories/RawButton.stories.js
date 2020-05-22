import React from "react";
import { storiesOf } from "@storybook/react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Basic from "./examples/Basic";
import OldRef from "./examples/OldRef";
import RawButton from "../src";

const Example = () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      <code>&lt;RawButton /&gt;</code>
    </Heading>
    <Tagline>
      <b>RawButton</b> – Interact with the props API
    </Tagline>
    <Rule />
    <RawButton />
  </Story>
);

storiesOf("Raw Button", module)
  .add("Basic", () => <Basic />)
  .add("Old Ref", () => <OldRef />)
  .add("Showcase", () => {
    return <Example />;
  });
