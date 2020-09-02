import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
import { boolean, number, select } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Counter from "../../src/Counter";

const counterKnobs = () => ({
  color: select("color", ["grey", "blue", "red"], "grey"),
  hasIndicator: boolean("hasIndicator", false),
  quantity: number("quantity", 32),
  size: select("size", [constants.limitedSize], "medium"),
  threshold: number("threshold", 99),
});

const Example = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      <code>&lt;Counter /&gt;</code>
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <Counter {...props} />
  </Story>
);

export default () => <Example {...counterKnobs()} />;
