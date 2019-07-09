import React from "react";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import { DropDownMenuStory } from "../DropDownMenu.stories.styles";
import DropDownMenuExample from "./DropDownMenuExample";

const ExampleStory = () => (
  <DropDownMenuStory>
    <Heading level={1} displayLevel={2} isLight>
      Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <DropDownMenuExample />
  </DropDownMenuStory>
);

export default () => <ExampleStory />;
