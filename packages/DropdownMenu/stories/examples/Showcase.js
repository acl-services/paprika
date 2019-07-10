import React from "react";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import { DropdownMenuStory } from "../DropdownMenu.stories.styles";
import DropdownMenuExample from "./DropdownMenuExample";

const ExampleStory = () => (
  <DropdownMenuStory>
    <Heading level={1} displayLevel={2} isLight>
      Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <DropdownMenuExample />
  </DropdownMenuStory>
);

export default () => <ExampleStory />;
