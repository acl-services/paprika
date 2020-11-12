import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import Heading from "@paprika/heading";
import RawButton from "../../src";

function clickHandler() {
  action("Clicked a button")();
}

const getKnobs = () => ({
  children: text("content", "Raw button text"),
  onClick: clickHandler,
  isDisabled: boolean("isDisabled", false),
  hasInsetFocusStyle: boolean("hasInsetFocusStyle", false),
  a11yText: text("ariaText", "ceci n'est pas un bouton"),
});

function Showcase(props) {
  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />
      <RawButton {...props} />
    </Story>
  );
}

export default () => <Showcase {...getKnobs()} />;
