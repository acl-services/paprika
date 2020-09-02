import React from "react";
import { Story, Gap } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Counter from "../../src/Counter";

const SizesTypesExample = () => (
  <Story>
    <Heading level={3}>Sizes</Heading>
    <Counter size={Counter.types.size.SMALL} quantity={33} />
    <Gap.Inline />
    <Counter quantity={33} />
    <Heading level={3}>Colors</Heading>
    <Heading level={5}>Grey</Heading>
    <Counter quantity={33} />
    <Gap.Inline />
    <Counter quantity={100} />
    <Heading level={5}>Red</Heading>
    <Counter color={Counter.types.color.RED} quantity={33} />
    <Gap.Inline />
    <Counter color={Counter.types.color.RED} quantity={100} />
    <Heading level={5}>Blue</Heading>
    <Counter color={Counter.types.color.BLUE} quantity={33} />
    <Gap.Inline />
    <Counter color={Counter.types.color.BLUE} quantity={100} />
  </Story>
);

export default SizesTypesExample;
