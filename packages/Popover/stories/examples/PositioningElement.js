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

  border: 2px dashed ${tokens.color.purpleLighten30};
  color: ${tokens.color.purple};
  font-weight: 100;

  height: 150px;
  letter-spacing: 0.05em;

  margin: 30px 0 0 120px;
  padding: ${stylers.spacer(2)};
  text-align: center;
  width: 150px;
`;

const getPositioningElement = () => document.querySelector("#another-div");

const popoverProps = () => ({
  align: select("align", ["bottom", "top", "right", "left"], "bottom"),
});

const ExampleStory = props => (
  <CenteredStory>
    <div>
      <Popover {...props} getPositioningElement={getPositioningElement}>
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

export default () => <ExampleStory {...popoverProps()} />;
