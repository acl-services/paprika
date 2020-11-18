import React from "react";
import { text } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import CopyInput from "../../src/CopyInput";

const copyInputKnobs = () => ({
  defaultValue: text("defaultValue", "Copy this"),
});

const Example = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      <code>&lt;CopyInput /&gt;</code>
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <CopyInput {...props} />
  </Story>
);

export default () => <Example {...copyInputKnobs()} />;
