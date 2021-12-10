import React from "react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import BasicCard from "./BasicCard";
import DeluxeCard from "./DeluxeCard";
import MultipleCard from "./MultipleCard";
import TagCard from "./TagCard";
import IconCard from "./IconCard";

const ExampleStory = () => (
  <Story>
    <BasicCard />
    <Rule />
    <DeluxeCard />
    <Rule />
    <MultipleCard />
    <Rule />
    <TagCard />
    <Rule />
    <IconCard />
  </Story>
);

export default ExampleStory;
