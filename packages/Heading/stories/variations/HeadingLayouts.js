import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import ExternalLinkExample from "../examples/ExternalLinkExample";
import SetWidthExample from "../examples/SetWidthExample";

export default function HeadingLayouts() {
  return (
    <Story>
      <ExternalLinkExample />
      <br />
      <SetWidthExample />
    </Story>
  );
}
