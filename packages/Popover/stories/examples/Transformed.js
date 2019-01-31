import React, { Component } from "react";
import styled from "styled-components";
import { CenteredStory } from "../../../../.storybook/assets/styles/common.styles";
import Popover from "../../Popover";

const TransformedStory = styled(CenteredStory)`
  background: #333;
  transform: translate(50%, 50%);
  width: 50vw;
  height: 50vh;
`;

export default class PopoverStory extends Component {
  render() {
    return (
      <TransformedStory>
        <Popover>
          <Popover.Trigger>
            <button type="button">Open Popover</button>
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
