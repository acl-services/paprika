import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Button from "../../src";

const ExampleStory = () => {
  return (
    <Story>
      <Button isActive>Active</Button>
      <Button isDisabled>Disabled</Button>
      <Button isPending>Pending</Button>
    </Story>
  );
};

export default ExampleStory;
