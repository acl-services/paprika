import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Heading from "@paprika/heading";
import ButtonGroup from "../../src";

function clickHandler() {
  action("Clicked a button")();
}

const buttonGroupProps = () => ({
  onChange: clickHandler,
  hasIcons: boolean("hasIcons", false),
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
    <ButtonGroup {...props} size={ShirtSizes.LARGE} onChange={() => {}}>
      <ButtonGroup.Button>One</ButtonGroup.Button>
      <ButtonGroup.Button>Two</ButtonGroup.Button>
      <ButtonGroup.Button>Three</ButtonGroup.Button>
    </ButtonGroup>
  </Story>
);

export default () => <ExampleStory {...buttonGroupProps()} />;
