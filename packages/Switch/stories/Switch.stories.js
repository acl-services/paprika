import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import Heading from "@paprika/heading";
import * as types from "../src/types";
import Example from "./SwitchExample";
import Variations from "./examples/Variations";

const storyName = getStoryName("Switch");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", () => (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        <code>&lt;Switch /&gt;</code>
      </Heading>
      <Tagline>
        <b>Showcase</b> – Interact with the props API
      </Tagline>
      <Rule />
      <Example
        a11yText={text("a11yText", "")}
        canPropagate={boolean("canPropagate", true)}
        isDisabled={boolean("isDisabled", false)}
        size={select("size", [types.SMALL, types.MEDIUM, types.LARGE], "medium")}
      />
    </Story>
  ))
  .add("Variations", () => <Variations />);
