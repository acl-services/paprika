import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { boolean, select } from "@storybook/addon-knobs";
import {  repeat } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import Panel from "@paprika/panel";
import Popover from "@paprika/popover";
import Heading from "@paprika/heading";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import Takeover from "../src";
import * as types from "../src/types";

// /* Long block to test body scroll locking */
// const LongBlock = styled.div`
//   padding-bottom: 200vh;
// `;

// const DemoFullWidthContent = styled.div`
//   background-image: linear-gradient(to bottom, #79ff85, #70b3ff);
//   flex: 1 1 auto;
// `;

storiesOf(`${storyName}/Backyard/Sandbox`, module)
  .add("with nested Panel", () =>
    React.createElement(() => {
      const [isOpen, setIsOpen] = React.useState(false);
      const toggle = () => {
        setIsOpen(state => !state);
      };
      return (
        <TakeoverStory>
          <Takeover.Content>
            <Panel isOpen={isOpen} onClose={toggle}>
              <Panel.Overlay />
              <Panel.Trigger kind={Panel.Trigger.types.kind.PRIMARY} onClick={toggle}>
                {isOpen ? "close" : "open side panel"}
              </Panel.Trigger>
              <Panel.Header>Header</Panel.Header>
            </Panel>
          </Takeover.Content>
        </TakeoverStory>
      );
    })
  )
  .add("with nested Popover", () => (
    <TakeoverStory>
      <Takeover.Content>
        <p>
          This example demonstrates how the Popover handles focus when created inside of a Takeover. Click the icons
          below to see how the popovers behave.
        </p>
        <Popover zIndex={11}>
          <Popover.Trigger>
            <InfoIcon />
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Card>
              <p>
                Try <a href="https://design.wegalvanize.com/">clicking this</a> with the mouse or keyboard...
              </p>
            </Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </Takeover.Content>
    </TakeoverStory>
  ))
  .add("Z Index", () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => {
      setIsOpen(state => !state);
    };
    return (
      <div
        css={`
          padding: 24px;
        `}
      >
        <Button onClick={toggle}>Open Takeover</Button>
        <Takeover isOpen={isOpen} onClose={toggle} zIndex={99}>
          <Takeover.Header
            hasCloseButton={boolean("Has close button", true, "Takeover.Header")}
            kind={select("Kind", ["default", "primary"], "default", "Takeover.Header")}
          >
            Header
          </Takeover.Header>
          <Takeover.Content>
            <p>
              The <code>zIndex</code> prop of this <code>&lt;Takeover&gt;</code> is also <code>99</code>.
            </p>
            <p>
              Because the content is renderered as a <code>&lt;Portal&gt;</code> at the end of the DOM, it will be
              painted on top.
            </p>
            {repeat(8, key => (
              <p key={key}>
                VHS adaptogen ethical butcher banjo vaporware street art air plant listicle irony post-ironic
                lumbersexual.
              </p>
            ))}
          </Takeover.Content>
        </Takeover>
        <div
          css={`
            position: relative;
            z-index: 99;
          `}
        >
          <p>
            The <code>z-index</code> of this content is <code>99</code>.
          </p>
          {repeat(8, key => (
            <p key={key}>
              Quinoa palo santo cold-pressed disrupt typewriter. Disrupt distillery tacos artisan taxidermy gastropub
              hexagon meggings.
            </p>
          ))}
        </div>
      </div>
    );
  });