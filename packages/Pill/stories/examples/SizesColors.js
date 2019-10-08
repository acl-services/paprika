import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Icon from "@paprika/icon/lib/Upload";
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
    <Heading level={3}>With Icons</Heading>
    <Pill pillColor="noRisk">
      <Icon />
      No risk with icon
    </Pill>
    <Pill pillColor="mediumRisk" size="small">
      <Icon />
      Medium risk with icon
    </Pill>
  </Story>
);

export default SizesColorsExample;
