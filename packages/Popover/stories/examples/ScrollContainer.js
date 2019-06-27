import React from "react";
import PropTypes from "prop-types";
import { select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import { popoverProps as basicProps } from "./Basic";
import Popover from "../../src";

const PopoverContainer = styled.div`
  width: 240%;
  height: 980px;
  // padding: 380px 230px 0 0;
  padding: 450px 0 0 0;
  text-align: center;
`;

const ScrollBox = styled.div`
  border: 3px solid #333;
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
          <Popover.Tip />
          <Popover.Card>{sampleText}</Popover.Card>
        </Popover.Content>
      </Popover>
    </PopoverContainer>
  );
};
PopoverBox.propTypes = {
  getScrollContainer: PropTypes.func.isRequired,
};

const ExampleStory = props => (
  <React.Fragment>
    <CenteredStory>
      <ScrollBox id="scroll-container">
        <PopoverBox {...props} getScrollContainer={() => document.querySelector("#scroll-container")} />
      </ScrollBox>
    </CenteredStory>
    <TrailerBox>Fin.</TrailerBox>
  </React.Fragment>
);

export default () => <ExampleStory {...popoverProps()} />;
