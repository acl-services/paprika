import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import ExampleStory from "storybook/components/ExampleStory";
import * as types from "../../src/types";
import SwitchExample from "../SwitchExample";

const getKnobs = () => ({
  a11yText: text("a11yText", ""),
  canPropagate: boolean("canPropagate", true),
  isDisabled: boolean("isDisabled", false),
  size: select("size", [types.SMALL, types.MEDIUM, types.LARGE], "medium"),
});

export default function Showcase() {
  return (
    <ExampleStory storyName="Switch" tagline={ExampleStory.defaultTaglines.showcase}>
      <SwitchExample {...getKnobs()} />
    </ExampleStory>
  );
}
