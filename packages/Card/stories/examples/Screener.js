import React from "react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import BasicCard from "./BasicCard";
import DeluxeCard from "./DeluxeCard";
import MultipleCard from "./MultipleCard";

const ExampleStory = () => {
  return (
    <Story>
      <BasicCard />
      <Rule />
      <DeluxeCard />
      <Rule />
      <MultipleCard />
    </Story>
  );
};

export default ExampleStory;
