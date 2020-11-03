import React from "react";
import styled from "styled-components";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Popover from "../../../src/Popover";

const TransformedStory = styled(CenteredStory)`
  background: #333;
  height: 50vh;
  min-height: 0;
  transform: translate(50%, 50%);
  width: 50vw;
`;

const Transformed = () => (
  <TransformedStory>
    <Popover>
      <Popover.Trigger>
        <Button kind={Button.types.kind.SECONDARY}>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Card>This popover renders inside a &lt;div&gt; with a CSS transform applied to it.</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  </TransformedStory>
);

export default Transformed;
