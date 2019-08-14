import React from "react";
import styled from "styled-components";
import { boolean } from "@storybook/addon-knobs";

import { Story, breaklines } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Popover from "../../src";

const ScrollStory = styled(Story)`
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
  height: 70vh;
  margin-right: 10px;
  overflow: auto;
`;

const PopoverWithState = () => {
  const [isOpen, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onCloseKnob = () => (boolean("use onClose handler", false) ? handleClose : undefined);

  return (
    <Popover
      isOpen={isOpen}
      getScrollContainer={() => document.getElementById("scroller")}
      zIndex={5}
      onClose={onCloseKnob()}
    >
      <Popover.Trigger>
        <Button
          onClick={() =>
            setOpen(prevOpen => {
              setOpen(!prevOpen);
            })
          }
        >
          Open Popover
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Card>
          Lorem ipsum dolor amet trust fund brooklyn bicycle rights, quinoa hoodie chartreuse master cleanse.
        </Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  );
};

const ExampleStory = () => (
  <ScrollStory id="scroller">
    <p>
      Illustrates an issue when Popover is <code>controlled</code> and can be scrolled out of view.
    </p>
    {breaklines(4)}
    <PopoverWithState />
    {breaklines(42)}
  </ScrollStory>
);

export default ExampleStory;
