import React from "react";
import { select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import { getKnobs as basicProps } from "./Showcase";
import Popover from "../../src/Popover";

const PopoverContainer = styled.div`
  height: 1024px;
  padding: 512px 0 0 1536px;
  width: 3072px;
`;

const ScrollBox = styled.div`
  border: 3px solid #999;
  border-radius: 5px;
  height: 420px;
  margin: 16px 32px;
  overflow: scroll;
  position: relative;
  width: 100%;
`;

const TrailerBox = styled.div`
  margin-top: 600px;
  padding: 16px;
`;

const sampleTexts = {
  short: "Hipsum",
  long: `Lorem ipsum lumbersexual hot chicken austin readymade messenger bag aesthetic meh twee you probably havent
    heard of them 3 wolf moon listicle. Normcore ramps gastropub fanny pack pabst. Hashtag roof party pour-over food
    truck, crucifix try-hard godard biodiesel next level snackwave disrupt flexitarian.`,
};

const popoverProps = () => ({
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
    action("There are no actions for this story.")();
    document.getElementById("scroll-container").scrollTo(1420, 320);
  });

  return (
    <React.Fragment>
      <CenteredStory>
        <ScrollBox id="scroll-container">
          <PopoverBox {...props} getScrollContainer={() => document.querySelector("#scroll-container")} />
        </ScrollBox>
      </CenteredStory>
      <TrailerBox>Fin.</TrailerBox>
    </React.Fragment>
  );
};

export default () => <ScrollContainer {...popoverProps()} />;
