import React from "react";
import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import { Gap } from "storybook/assets/styles/common.styles";
import Popover from "../../src";

export default function PositioningElement() {
  return (
    <>
      <p>
        The <code>&lt;Popover&gt;</code> has a prop called <code>getPositioningElement</code> to provide a function that
        returns a DOM element that will be used as the anchor for positioning the <code>&lt;Popover.Content&gt;</code>
        instead of the trigger element.
      </p>
      <p>
        The following example also makes use of the <code>offset</code> and <code>zIndex</code> props to position the
        content on top of the positioning element.
      </p>
      <Gap />
      <Popover
        getPositioningElement={() => document.querySelector("#target-element")}
        offset={-20}
        zIndex={stylers.zValue(4)}
      >
        <Popover.Trigger>{handler => <Button onClick={handler}>Open Popover</Button>}</Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Positioned by getPositioningElement</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Target id="target-element">Positioning Element</Target>
    </>
  );
}

const Target = styled.div`
  ${stylers.alignMiddle}
  ${stylers.fontSize(3)}
  ${stylers.z(3)}
  background: ${tokens.color.white};
  border: 2px dashed ${tokens.color.purpleLighten30};
  color: ${tokens.color.purple};
  font-weight: 100;
  height: 150px;
  letter-spacing: 0.05em;
  margin: 30px 0 0 60px;
  padding: ${stylers.spacer(2)};
  position: relative;
  text-align: center;
  width: 150px;
`;
