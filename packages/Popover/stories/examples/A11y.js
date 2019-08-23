import React from "react";
import styled from "styled-components";
import Popover from "../../src";

const Gap = styled.div`
  height: 200px;
`;

const ExampleStory = () => (
  <React.Fragment>
    <Popover isOpen>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover.Content>
        <Popover.Card>Popover content.</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
    <Gap />
    <Popover isOpen isDark>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover.Content>
        <Popover.Card>Popover content.</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  </React.Fragment>
);

export default ExampleStory;
