import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Heading from "@paprika/heading";
import Calendar from "@paprika/icon/lib/Calendar";
import ButtonGroup from "../../src";

const changeHandler = selectedItems => {
  action("Selected an item")(...selectedItems);
};

const buttonGroupProps = () => ({
  onChange: changeHandler,
  hasIcons: boolean("hasIcons", false),
  isDisabled: boolean("isDisabled", false),
  isFullWidth: boolean("isFullWidth", false),
  isMulti: boolean("isMulti", false),
  isSemantic: boolean("isSemantic", true),
  size: select("size", ShirtSizes.DEFAULT, ShirtSizes.MEDIUM),
});

const ExampleStory = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Testing Sandbox
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <ButtonGroup {...props}>
      <ButtonGroup.Item value="one" kind="primary">
        One
      </ButtonGroup.Item>
      <ButtonGroup.Item value="two" defaultIsActive tabIndex={0}>
        Two
      </ButtonGroup.Item>
      <>
        <ButtonGroup.Item value={3} defaultIsActive>
          Three Three Three Three Three Three
        </ButtonGroup.Item>
        <ButtonGroup.Item value="four">
          <Calendar />
        </ButtonGroup.Item>
      </>
    </ButtonGroup>
  </Story>
);

export default () => <ExampleStory {...buttonGroupProps()} />;
