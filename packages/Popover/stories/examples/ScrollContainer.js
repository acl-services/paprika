import React from "react";
import PropTypes from "prop-types";
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

const PopoverBox = props => {
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
};
PopoverBox.propTypes = {
  getScrollContainer: PropTypes.func.isRequired,
};

function setKnobsTab() {
  setTimeout(() => {
    // eslint-disable-next-line no-restricted-globals
    parent.document.querySelector("#storybook-panel-root .simplebar-content button").click();
  });
}

function togglePanelPosition() {
  setTimeout(() => {
    // eslint-disable-next-line no-restricted-globals
    const buttons = parent.document.querySelectorAll("#storybook-panel-root .simplebar-content button");
    buttons[buttons.length - 2].click();
  });
}

function actionsObseyo() {
  setTimeout(() => {
    action("There are 0 actions for this story.")();
    setKnobsTab();
  });
}

const ExampleStory = props => {
  actionsObseyo();
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
