import React from "react";
import styled from "styled-components";
import { Story } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Popover from "../../src";

const ScrollStory = styled(Story)`
  background-color: #fafafa;
  border-bottom: 1px solid #ddd;
  height: 85vh;
  overflow: auto;
`;

const PopoverWithState = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Popover isOpen={isOpen} getScrollContainer={() => document.getElementById("scroller")}>
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
        <Popover.Tip />
        <Popover.Card>
          Lorem ipsum dolor amet trust fund brooklyn bicycle rights, quinoa hoodie chartreuse master cleanse.
        </Popover.Card>
      </Popover.Content>
    </Popover>
  );
};

const ExampleStory = () => (
  <ScrollStory id="scroller">
    <p>
      Illustrates an issue when Popover is <code>controlled</code> and can be scrolled out of view.
    </p>
    {[...Array(32).keys()].map(index => (
      <br key={index} />
    ))}
    <PopoverWithState />
  </ScrollStory>
);

export default ExampleStory;
