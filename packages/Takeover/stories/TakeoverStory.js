import React from "react";
import styled from "styled-components";
import { boolean } from "@storybook/addon-knobs";
import Button from "@paprika/button";
import Takeover from "../src";

/* Long block to test body scroll locking */
const LongBlock = styled.div`
  padding-bottom: 200vh;
`;

const TakeoverStory = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  const Tools = (
    <>
      you have unsaved changes
      <Button kind={Button.types.kind.PRIMARY} size={Button.types.size.LARGE}>
        primary
      </Button>
      <Button kind={Button.types.kind.DEFAULT} size={Button.types.size.LARGE}>
        default
      </Button>
    </>
  );

  return (
    <LongBlock>
      <Button onClick={toggle}>Open</Button>
      <Takeover isOpen={isOpen} onClose={toggle} a11yText="Takeover View" className="storybook-takeover">
        <Takeover.Overlay className="storybook-takeover__overlay" />
        <Takeover.FocusLock className="storybook-takeover__focuslock" />
        <Takeover.Header
          className="storybook-takeover__header"
          hasCloseButton={boolean("Has close button", true, "Takeover.Header")}
          headerTools={Tools}
        >
          Header
        </Takeover.Header>
        {children}
      </Takeover>
    </LongBlock>
  );
};

export default TakeoverStory;
