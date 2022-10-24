import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import SidePanel from "@paprika/sidepanel";
import Takeover from "../src";

/* Long block to test body scroll locking */
const LongBlock = styled.div`
  padding-bottom: 200vh;
`;

const DemoFullWidthContent = styled.div`
  background-image: linear-gradient(to bottom, #79ff85, #70b3ff);
  flex: 1 1 auto;
`;

const TakeoverStory = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <LongBlock>
      <Button onClick={toggle}>Open</Button>
      <Takeover isOpen={isOpen} onClose={toggle}>
        <Takeover.Header
          hasCloseButton={boolean("Has close button", true, "Takeover.Header")}
          kind={select("Kind", ["default", "primary"], "default", "Takeover.Header")}
        >
          Header
        </Takeover.Header>
        {children}
      </Takeover>
    </LongBlock>
  );
};

storiesOf("Takeover", module)
  .addDecorator(withKnobs)
  .add("Basic", () => (
    <TakeoverStory>
      <Takeover.Content>
        {Array(100)
          .fill(null)
          .map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={i}>Some content here</p>
          ))}
      </Takeover.Content>
    </TakeoverStory>
  ))
  .add("with overridden FocusTrap", () => (
    <TakeoverStory>
      <Takeover.FocusTrap
        initialFocus={() => {
          return document.querySelector("[data-pka-anchor='takeover.focustrap.input']");
        }}
      />
      <Takeover.Content>
        <input type="text" data-pka-anchor="takeover.focustrap.input" />
      </Takeover.Content>
    </TakeoverStory>
  ))
  .add("with full-width content", () => (
    <TakeoverStory>
      <DemoFullWidthContent />
    </TakeoverStory>
  ))
  .add("with nested SidePanel", () =>
    React.createElement(() => {
      const [isOpen, setIsOpen] = React.useState(false);
      const toggle = () => {
        setIsOpen(state => !state);
      };

      return (
        <TakeoverStory>
          <Takeover.Content>
            <SidePanel isOpen={isOpen} onClose={toggle}>
              <SidePanel.Overlay />
              <SidePanel.Trigger kind="primary" onClick={toggle}>
                {isOpen ? "close" : "open side panel"}
              </SidePanel.Trigger>
              <SidePanel.Header>
                <Heading level={2}>Header</Heading>
              </SidePanel.Header>
            </SidePanel>
          </Takeover.Content>
        </TakeoverStory>
      );
    })
  );
