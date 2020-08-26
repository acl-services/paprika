import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import Heading from "@paprika/heading";
import * as types from "../src/types";
import Example from "./SwitchExample";
import Switch from "../src/Switch";

const storyName = getStoryName("Switch");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", () => {
    return (
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
    );
  });

storiesOf(`${storyName}/Examples`, module)
  .add("Switch sizes", () => {
    return (
      <Story>
        <h4>
          <code>size=&quot;small&quot;</code>
        </h4>
        <Example size={Switch.types.size.SMALL} />
        <p />
        <h4>
          <code>size=&quot;medium&quot;</code>
        </h4>
        <Example size={Switch.types.size.MEDIUM} />
        <p />
        <h4>
          <code>size=&quot;large&quot;</code>
        </h4>
        <Example size={Switch.types.size.LARGE} />
      </Story>
    );
  })
  .add("Disabled switch", () => {
    return (
      <Story>
        <h4>
          <code>isDisabled</code>
        </h4>
        <Example isDisabled isChecked={false} />
        <p />
        <h4>
          <code>isDisabled isChecked</code>
        </h4>
        <Example isDisabled isChecked />
      </Story>
    );
  });
