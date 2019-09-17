import React from "react";
import { addParameters } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import { popoverProps as basicProps } from "./Basic";
import Popover from "../../src";

const PopoverContainer = styled.div`
  height: 1024px;
  padding: 512px 0 0 0;
  text-align: center;
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

function setKnobsTab() {
  setTimeout(() => {
    const $knobsTab = window.parent.document.querySelector("#storybook-panel-root .simplebar-content button");
    if ($knobsTab) $knobsTab.click();
  });
}

function togglePanelPosition() {
  setTimeout(() => {
    const $panelButtons = window.parent.document.querySelectorAll("#storybook-panel-root .simplebar-content button");
    if ($panelButtons && $panelButtons.length) $panelButtons[$panelButtons.length - 2].click();
  });
}

function noActionsMessage() {
  setTimeout(() => {
    action("There are no actions for this story.")();
    setKnobsTab();
  });
}

const ExampleStory = props => {
  noActionsMessage();
  togglePanelPosition();

  setTimeout(() => {
    document.getElementById("scroll-container").scrollTo(1080, 320);
  });

  addParameters({
    options: {
      panelPosition: "bottom",
    },
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

export default () => <ExampleStory {...popoverProps()} />;
