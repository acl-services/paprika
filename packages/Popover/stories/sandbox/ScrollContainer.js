import React from "react";
import { select } from "@storybook/addon-knobs";
import styled from "styled-components";
import Button from "@paprika/button";
import { getBasicKnobs as basicProps, sampleTexts } from "../examples/Showcase";
import Popover from "../../src";

const getKnobs = () => ({
  ...basicProps(),
  sampleText: sampleTexts[select("content", ["short", "long"], "long")],
});

function PopoverBox(props) {
  const { sampleText, ...moreProps } = props;
  return (
    <PopoverContainer>
      <Popover {...moreProps}>
        <Popover.Trigger>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>{sampleText}</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    </PopoverContainer>
  );
}

const ScrollContainer = props => {
  setTimeout(() => {
    document.getElementById("scroll-container").scrollTo(1420, 320);
  });

  return (
    <>
      <ScrollBox id="scroll-container">
        <PopoverBox {...props} getScrollContainer={() => document.querySelector("#scroll-container")} />
      </ScrollBox>
      <TrailerBox>Fin.</TrailerBox>
    </>
  );
};

export default () => <ScrollContainer {...getKnobs()} />;

const PopoverContainer = styled.div`
  height: 1024px;
  padding: 512px 0 0 1536px;
  width: 3072px;
`;

const ScrollBox = styled.div`
  border: 3px solid #999;
  border-radius: 5px;
  height: 420px;
  overflow: scroll;
  position: relative;
  width: 100%;
`;

const TrailerBox = styled.div`
  margin-top: 600px;
  padding: 16px;
`;
