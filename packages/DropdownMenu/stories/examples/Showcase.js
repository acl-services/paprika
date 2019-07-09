import React from "react";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Button from "@paprika/button";
import { DropDownMenuStory } from "../DropDownMenu.stories.styles";
import DropDownMenuExample from "./DropDownMenuExample";

const dropDownMenuProps = () => ({
  /** Render prop for rendering the trigger element that toggles the dropdown */
  align: "bottom",
  renderTrigger: handleOpenMenu => <Button onClick={handleOpenMenu}>Trigger</Button>,
});

const ExampleStory = props => (
  <DropDownMenuStory>
    <Heading level={1} displayLevel={2} isLight>
      Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <DropDownMenuExample {...props} />
  </DropDownMenuStory>
);

export default () => <ExampleStory {...dropDownMenuProps()} />;
