import React from "react";
import { testStoryParameters } from "storybook/assets/storyParameters";
import { boolean } from "@storybook/addon-knobs";
import { repeat } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import Button from "@paprika/button";
import Panel from "@paprika/panel";
import Popover from "@paprika/popover";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import TakeoverStory, { CustomFooterLayout } from "./TakeoverStory";
import Takeover from "../src";

const storyName = getStoryName("Takeover");

export default {
  title: `${storyName}/Backyard/Sandbox`,
  component: Takeover,
};

export const nestedPanel = () =>
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
            <Panel.Trigger onClick={toggle}>{isOpen ? "close" : "open side panel"}</Panel.Trigger>
            <Panel.Header>Header</Panel.Header>
          </Panel>
        </Takeover.Content>
        <Takeover.Footer>
          <CustomFooterLayout />
        </Takeover.Footer>
      </TakeoverStory>
    );
  });

nestedPanel.story = {
  name: "with nested Panel",
  parameters: testStoryParameters,
};

export const withPopOver = () => (
  <TakeoverStory>
    <Takeover.Content>
      <p>
        This example demonstrates how the Popover handles focus when created inside of a Takeover. Click the icons below
        to see how the popovers behave.
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
    <Takeover.Footer />
  </TakeoverStory>
);

withPopOver.story = {
  name: "with nested Popover",
  parameters: testStoryParameters,
};

export const ZIndex = () => {
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
        <Takeover.Header hasCloseButton={boolean("Has close button", true, "Takeover.Header")}>Header</Takeover.Header>
        <Takeover.Content>
          <p>
            The <code>zIndex</code> prop of this <code>&lt;Takeover&gt;</code> is also <code>99</code>.
          </p>
          <p>
            Because the content is renderered as a <code>&lt;Portal&gt;</code> at the end of the DOM, it will be painted
            on top.
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
};

ZIndex.story = {
  name: "Z Index",
  parameters: testStoryParameters,
};

export const withPendo = () => (
  <>
    <div id="pendo-base" style={{ position: "absolute", zIndex: 10, background: "lightgray", top: "300px" }}>
      <h1>Pendo popover</h1>
      <input />
    </div>

    <TakeoverStory>
      <Takeover.Content>
        <p>This example demonstrates how the pendo popovers can be ignored by the whitelist</p>
      </Takeover.Content>
      <Takeover.Footer />
    </TakeoverStory>
  </>
);

withPendo.story = {
  name: "with pendo popover",
  parameters: testStoryParameters,
};
