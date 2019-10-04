import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import Takeover from "../src";

const LongBlock = styled.div`
  padding-bottom: 200vh;
`;

const DemoFullWidthContent = styled.div`
  flex: 1 1 auto;
  background-image: linear-gradient(to bottom, #79ff85, #70b3ff);
`;

const TakeoverStory = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <LongBlock>
      <Button onClick={toggle}>Open</Button>
      <Takeover isInline={boolean("Inline", false, "Takeover")} isOpen={isOpen} onClose={toggle}>
        <Takeover.Header
          hasCloseButton={boolean("Has close button", true, "Takeover.Header")}
          kind={select("Kind", ["default", "primary"], "default", "Takeover.Header")}
        >
          <Heading level={2}>Header</Heading>
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
  ));
