import React from "react";
import { Rule, breaklines } from "storybook/assets/styles/common.styles";
import { ButtonStory } from "../Button.stories.styles";
import ButtonVariations from "./ButtonVariations";
import LinkButtonVariations from "./LinkButtonVariations";
import IconButtonVariations from "./IconButtonVariations";
import CloseButtonVariations from "./CloseButtonVariations";

export default function Variations() {
  return (
    <ButtonStory>
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
