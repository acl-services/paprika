import React from "react";
import { select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Popover from "../../Popover";

const PositioningElementStyled = styled.div`
  width: 150px;
  height: 150px;
  border: 2px dashed purple;
  margin: 32px 0 0 120px;

  color: purple;
  padding: 16px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 0.05em;
  font-weight: 100;

  // vertical center mixin?
  align-items: center;
  display: flex;
  justify-content: center;
`;

const getPositioningElement = () => document.querySelector("#another-div");

export default class ExampleStory extends React.Component {
  render() {
    return (
      <CenteredStory>
        <div>
          <Popover
            align={select("align", ["bottom", "top", "right", "left"], "bottom")}
            getPositioningElement={getPositioningElement}
          >
            <Popover.Trigger>
              <button type="button">Open Popover</button>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Tip />
              <Popover.Card>Positioned by getPositioningElement</Popover.Card>
            </Popover.Content>
          </Popover>
          <PositioningElementStyled id="another-div">Positioning Element</PositioningElementStyled>
        </div>
      </CenteredStory>
    );
  }
}
