import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import { DropdownMenuStory } from "../DropdownMenu.stories.styles";
import DropdownMenuExample from "./DropdownMenuExample";

const dropdownMenuProps = () => ({
  // size: select("size", ShirtSizes.DEFAULT, "medium"),
  // placeholder: text("placeholder", "Enter some text"),
  // icon: iconSelections[select("icon", Object.keys(iconSelections), null)],
  // hasClearButton: boolean("hasClearButton", false),
  // isDisabled: boolean("isDisabled", false),
  // isReadOnly: boolean("isReadOnly", false),
  // hasError: boolean("hasError", false),
  // type: select("type", ["password", "text"], "text"),
  // a11yText: text("a11yText", ""),
});

const ExampleStory = props => (
  <DropdownMenuStory>
    <Heading level={1} displayLevel={2} isLight>
      Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <DropdownMenuExample {...props} />
  </DropdownMenuStory>
);

export default () => <ExampleStory {...dropdownMenuProps()} />;
