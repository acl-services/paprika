import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import styled from 'styled-components';
import Button from "@paprika/button";
import Takeover from "../src";

const LongBlock = styled.div`
  padding-bottom: 200vh;
`;

const TakeoverStory = ({ isInline }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <LongBlock>
      <Button onClick={toggle}>Open</Button>
      <Takeover isInline={isInline} isOpen={isOpen} onClose={toggle} />
    </LongBlock>
  );
};

storiesOf("Takeover", module)
  .addDecorator(withKnobs)
  .add("Basic", () => <TakeoverStory isInline={boolean("Inline", false)} />);
