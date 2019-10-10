import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import AddIcon from "@paprika/icon/lib/Add";
import TimesIcon from "@paprika/icon/lib/Times";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import Heading from "@paprika/heading";
import Button from "../../src";

function clickHandler() {
  action("Clicked a button")();
}

const iconSelections = {
  none: null,
  add: <AddIcon />,
  times: <TimesIcon />,
  info: <InfoIcon />,
};

const buttonProps = () => ({
  children: text("label", "Buy now"),
  size: select("size", ShirtSizes.DEFAULT, "medium"),
  kind: select("type", ["default", "primary", "secondary", "flat", "destructive", "minor", "link"], "default"),
  onClick: clickHandler,
  icon: iconSelections[select("icon", Object.keys(iconSelections), null)],
  isActive: boolean("isActive", false),
  isDisabled: boolean("isDisabled", false),
  isDropdown: boolean("isDropdown", false),
  isFullWidth: boolean("isFullWidth", false),
  isPending: boolean("isPending", false),
  isSubmit: boolean("isSubmit", false),
  isSemantic: boolean("isSemantic", true),
  a11yText: text("a11yText", ""),
});

const ExampleStory = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <Button {...props} />
  </Story>
);

export default () => <ExampleStory {...buttonProps()} />;
