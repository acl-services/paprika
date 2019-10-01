import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import Button from "@paprika/button";
import Takeover from "../src";

const TakeoverStory = ({ isInline }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <>
      <Button onClick={toggle}>Open</Button>
      <Takeover isInline={isInline} isOpen={isOpen} onClose={toggle} />
    </>
  );
};

storiesOf("Takeover", module)
  .addDecorator(withKnobs)
  .add("Basic", () => <TakeoverStory isInline={boolean("Inline", false)} />);
