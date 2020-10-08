import React from "react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import DividerExample from "../examples/DividerExample";
import UnderLineExample from "../examples/UnderlineExample";

export default function HeadingStyles() {
  return (
    <Story>
      <DividerExample />
      <Rule />
      <UnderLineExample />
    </Story>
  );
}
