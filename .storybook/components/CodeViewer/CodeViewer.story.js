import React from "react";
import { storiesOf } from "@storybook/react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Pill from "@paprika/pill";
import CodeViewer from "storybook/components/CodeViewer";
import ArrowRight from "@paprika/icon/lib/ArrowRight";

const parameters = {
  options: {
    showPanel: false,
    isToolshown: false,
  },
};

storiesOf("Utilities | CodeViewer", module)
  .addParameters(parameters)
  .add("Variations", () => (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        CodeViewer – Variations
      </Heading>
      <Rule />
      <CodeViewer defaultIsShown>🐐</CodeViewer>
      <Rule />
      <CodeViewer defaultIsShown>
        <Pill>
          <ArrowRight />
        </Pill>
      </CodeViewer>
      <Rule />
      <CodeViewer defaultIsShown>
        <Heading level={4}>🐐</Heading>
        <>
          <ArrowRight />
          <Pill>🐐</Pill>
          <span>🐐</span>
        </>
      </CodeViewer>
    </Story>
  ));
