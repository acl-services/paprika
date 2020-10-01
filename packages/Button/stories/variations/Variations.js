import React from "react";
import { Rule, Tagline, breaklines } from "storybook/assets/styles/common.styles";
import { ButtonStory } from "../Button.stories.styles";
import ButtonVariations from "./ButtonVariations";
import LinkButtonVariations from "./LinkButtonVariations";
import IconButtonVariations from "./IconButtonVariations";
import CloseButtonVariations from "./CloseButtonVariations";

export default function Variations() {
  return (
    <ButtonStory>
      <Tagline>So many different kinds of Buttons!</Tagline>
      <Rule />
      <ButtonVariations />
      <Rule />
      <LinkButtonVariations />
      <Rule />
      <IconButtonVariations />
      <Rule />
      <CloseButtonVariations />
      {breaklines(34)}
      ...fin.
    </ButtonStory>
  );
}
