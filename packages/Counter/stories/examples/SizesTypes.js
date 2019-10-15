import React from "react";
import { Story, HorizontalSmallGap } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Counter from "../../src/Counter";

const SizesTypesExample = () => (
  <Story>
    <Heading level={3}>Sizes</Heading>
    <Counter size="small" quantity={33} />
    <HorizontalSmallGap />
    <Counter quantity={33} />
    <Heading level={3}>Colors</Heading>
    <Heading level={5}>Grey</Heading>
    <Counter quantity={33} />
    <HorizontalSmallGap />
    <Counter quantity={100} />
    <Heading level={5}>Red</Heading>
    <Counter color="red" quantity={33} />
    <HorizontalSmallGap />
    <Counter color="red" quantity={100} />
    <Heading level={5}>Blue</Heading>
    <Counter color="blue" quantity={33} />
    <HorizontalSmallGap />
    <Counter color="blue" quantity={100} />
  </Story>
);

export default SizesTypesExample;
