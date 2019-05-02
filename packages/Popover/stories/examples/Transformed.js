import React from "react";
import styled from "styled-components";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Button from "packages/Button";
import Popover from "../../src";

const TransformedStory = styled(CenteredStory)`
  background: #333;
  transform: translate(50%, 50%);
  width: 50vw;
  height: 50vh;
`;

export default class ExampleStory extends React.Component {
  render() {
    return (
      <TransformedStory>
        <Popover>
          <Popover.Trigger>
            <Button kind="secondary">Open Popover</Button>
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Tip />
            <Popover.Card>This popover renders inside a &lt;div&gt; with a CSS transform applied to it.</Popover.Card>
          </Popover.Content>
        </Popover>
      </TransformedStory>
    );
  }
}
