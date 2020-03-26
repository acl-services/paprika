import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Heading from "@paprika/heading";
import ButtonGroup from "../../src";

function clickHandler() {
  action("Clicked a button")();
}

const buttonProps = () => ({
  children: text("label", "Give now"),
  size: select("size", ShirtSizes.DEFAULT, "medium"),
  onClick: clickHandler,
  isDisabled: boolean("isDisabled", false),
  isFullWidth: boolean("isFullWidth", false),
  isSemantic: boolean("isSemantic", true),
});

const ExampleStory = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <ButtonGroup {...props} />
  </Story>
);

export default () => <ExampleStory {...buttonProps()} />;
