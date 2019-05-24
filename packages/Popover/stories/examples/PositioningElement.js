import React from "react";
import { select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import Popover from "../../src";

const PositioningElementStyled = styled.div`
  ${stylers.alignMiddle}
  ${stylers.fontSize(3)}

  width: 150px;
  height: 150px;
  margin: 30px 0 0 120px;

  border: 2px dashed ${tokens.color.purpleLighten30};
  padding: ${stylers.spacer(2)};

  color: ${tokens.color.purple};
  font-weight: 100;
  letter-spacing: 0.05em;
  text-align: center;
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
              <Button>Open Popover</Button>
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
