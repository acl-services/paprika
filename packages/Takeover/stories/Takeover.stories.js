import React from "react";
import { storiesOf } from "@storybook/react";
import Takeover from "@paprika/takeover/src";

const TakeoverStory = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return <Takeover isOpen={isOpen} onClose={toggle} />;
};

storiesOf("Takeover", module).add("Basic", () => <TakeoverStory />);
