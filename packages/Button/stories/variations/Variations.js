import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import ButtonVariations from "./ButtonVariations";
import LinkButtonVariations from "./LinkButtonVariations";
import IconButtonVariations from "./IconButtonVariations";
import CloseButtonVariations from "./CloseButtonVariations";

export default function Variations() {
  return (
    <>
      <ButtonVariations />
      <Gap />
      <LinkButtonVariations />
      <Gap />
      <IconButtonVariations />
      <Gap />
      <CloseButtonVariations />
    </>
  );
}
