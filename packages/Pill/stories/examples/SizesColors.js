import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import tokens from "@paprika/tokens";
import Pill from "../../src/Pill";

import * as helpers from "../Pill.stories.helpers";

const SizesColorsExample = () => (
  <Story css={helpers.storyStyles}>
    <Heading level={3}>Sizes</Heading>
    <Pill size="small">small</Pill>
    <Pill size="medium">medium</Pill>
    <Heading level={3}>Colors</Heading>
    <Pill pillColor="noRisk">No risk</Pill>
    <Pill pillColor="lowRisk">Low risk</Pill>
    <Pill pillColor="mediumRisk">Medium risk</Pill>
    <Pill pillColor="highRisk">High risk</Pill>
    <Heading level={3}>Custom Colors</Heading>
    <Pill pillColor="indigo">Indigo</Pill>
    <Pill pillColor="purple">Purple</Pill>
    <Pill pillColor={tokens.color.blackLighten20}>Custom</Pill>
    <Pill pillColor="teal" textColor="lightgreen">
      Teal and green
    </Pill>
  </Story>
);

export default SizesColorsExample;
