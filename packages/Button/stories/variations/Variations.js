import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import { ButtonStory } from "../Button.stories.styles";
import ButtonVariations from "./ButtonVariations";
import LinkButtonVariations from "./LinkButtonVariations";
import IconButtonVariations from "./IconButtonVariations";
import CloseButtonVariations from "./CloseButtonVariations";

export default function Variations() {
  return (
    <ButtonStory
      storyName="Variations"
      tagline="&lt;Button&gt; · &lt;Button.Link&gt; · &lt;Button.Icon&gt; · &lt;Button.Close&gt;"
    >
      <ButtonVariations />
      <Gap />
      <LinkButtonVariations />
      <Gap />
      <IconButtonVariations />
      <Gap />
      <CloseButtonVariations />
    </ButtonStory>
  );
}
