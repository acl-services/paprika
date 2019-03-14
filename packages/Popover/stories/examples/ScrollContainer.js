import React, { Component } from "react";
import { select, text, number } from "@storybook/addon-knobs";
import { func } from "prop-types";
import styled from "styled-components";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Popover from "../../Popover";

const PopoverContainer = styled.div`
  width: 240%;
  height: 980px;
  // padding: 380px 230px 0 0;
  padding: 450px 0 0 0;
  text-align: center;
`;

const ScrollBox = styled.div`
  width: 100%;
  height: 420px;
  overflow: scroll;
  border: 3px solid #333;
  border-radius: 5px;
  margin: 16px 32px;
  position: relative;
`;

const TrailerBox = styled.div`
  margin-top: 600px;
  padding: 16px;
`;

const sampleText = {
  short: "Hipsum",
  long: `Lorem ipsum lumbersexual hot chicken austin readymade messenger bag aesthetic meh twee you probably havent
    heard of them 3 wolf moon listicle. Normcore ramps gastropub fanny pack pabst. Hashtag roof party pour-over food
    truck, crucifix try-hard godard biodiesel next level snackwave disrupt flexitarian.`,
};

const PopoverBox = ({ getScrollContainer }) => (
  <PopoverContainer>
    <Popover
      align={select("align", ["bottom", "top", "right", "left"], "bottom")}
      maxWidth={text("maxWidth", "320px")}
      offset={number("offset", 12)}
      getScrollContainer={getScrollContainer}
    >
      <Popover.Trigger>
        <button type="button">Open Popover</button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Tip />
        <Popover.Card>{sampleText[select("content", ["short", "long"], "long")]}</Popover.Card>
      </Popover.Content>
    </Popover>
  </PopoverContainer>
);

PopoverBox.propTypes = {
  getScrollContainer: func.isRequired,
};

export default class ExampleStory extends Component {
  render() {
    return (
      <React.Fragment>
        <CenteredStory>
          <ScrollBox id="scroll-container">
            <PopoverBox getScrollContainer={() => document.querySelector("#scroll-container")} />
          </ScrollBox>
        </CenteredStory>
        <TrailerBox>Fin.</TrailerBox>
      </React.Fragment>
    );
  }
}
