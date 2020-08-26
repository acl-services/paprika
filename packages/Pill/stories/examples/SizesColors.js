import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Icon from "@paprika/icon/lib/Upload";
import Pill from "../../src/Pill";

import * as helpers from "../Pill.stories.helpers";

const SizesColorsExample = () => (
  <Story css={helpers.storyStyles}>
    <Heading level={3}>Sizes</Heading>
    <Pill size={Pill.types.size.SMALL}>small</Pill>
    <Pill size={Pill.types.size.MEDIUM}>medium</Pill>
    <Heading level={3}>Colors</Heading>
    <Pill pillColor={Pill.types.color.BLACK}>Black pill</Pill>
    <Pill pillColor={Pill.types.color.GREY}>Grey pill</Pill>
    <Pill pillColor={Pill.types.color.BLUE}>Blue pill</Pill>
    <Pill pillColor={Pill.types.color.LIGHT_BLUE}>Light blue pill</Pill>
    <Pill pillColor={Pill.types.color.GREEN}>Green pill</Pill>
    <Pill pillColor={Pill.types.color.ORANGE}>Orange pill</Pill>
    <Pill pillColor={Pill.types.color.LIGHT_ORANGE}>Light orange pill</Pill>
    <Pill pillColor={Pill.types.severity.NO_RISK}>No risk</Pill>
    <Pill pillColor={Pill.types.severity.LOW_RISK}>Low risk</Pill>
    <Pill pillColor={Pill.types.severity.MEDIUM_RISK}>Medium risk</Pill>
    <Pill pillColor={Pill.types.severity.HIGH_RISK}>High risk</Pill>
    <Heading level={3}>With Icons</Heading>
    <Pill pillColor={Pill.types.severity.NO_RISK}>
      <Icon />
      No risk with icon
    </Pill>
    <Pill pillColor={Pill.types.MEDIUM_RISK} size={Pill.types.size.SMALL}>
      <Icon />
      Medium risk with icon
    </Pill>
  </Story>
);

export default SizesColorsExample;
