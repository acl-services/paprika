import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import RawButton from "../../src";

function clickHandler() {
  action("Clicked a button")();
}

const getKnobs = () => ({
  children: text("content", "Raw button text"),
  onClick: clickHandler,
  isDisabled: boolean("isDisabled", false),
  hasInsetFocusStyle: boolean("hasInsetFocusStyle", false),
  a11yText: text("a11yText", "ceci n'est pas un bouton"),
});

export default function Showcase() {
  return <RawButton {...getKnobs()} />;
}
