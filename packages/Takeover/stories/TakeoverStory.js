import React from "react";
import styled from "styled-components";
// import { storiesOf } from "@storybook/react";
import { boolean, select } from "@storybook/addon-knobs";
// import { Story, Rule, Tagline, repeat } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
// import stylers from "@paprika/stylers";
import Button from "@paprika/button";
// import Panel from "@paprika/panel";
// import Popover from "@paprika/popover";
// import Heading from "@paprika/heading";
// import InfoIcon from "@paprika/icon/lib/InfoCircle";
import Takeover from "../src";
import * as types from "../src/types";


/* Long block to test body scroll locking */
const LongBlock = styled.div`
  padding-bottom: 200vh;
`;

// const DemoFullWidthContent = styled.div`
//   background-image: linear-gradient(to bottom, #79ff85, #70b3ff);
//   flex: 1 1 auto;
// `;

const TakeoverStory = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <LongBlock>
      <Button onClick={toggle}>Open</Button>
      <Takeover isOpen={isOpen} onClose={toggle} a11yText="Takeover View" className="storybook-takeover">
        <Takeover.Overlay className="storybook-takeover__overlay" />
        <Takeover.FocusLock className="storybook-takeover__focuslock" />
        <Takeover.Header
          className="storybook-takeover__header"
          hasCloseButton={boolean("Has close button", true, "Takeover.Header")}
          kind={select("Kind", [types.DEFAULT, types.PRIMARY], types.DEFAULT, "Takeover.Header")}
        >
          Header
        </Takeover.Header>
        {children}
      </Takeover>
    </LongBlock>
  );
};

export default TakeoverStory;