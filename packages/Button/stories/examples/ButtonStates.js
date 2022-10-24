import React from "react";
import { ButtonStory } from "../Button.stories.styles";
import Button from "../../src";

const ExampleStory = () => {
  return (
    <ButtonStory>
      <Button isActive>Active</Button>
      <Button isDisabled>Disabled</Button>
      <Button isPending>Pending</Button>
    </ButtonStory>
  );
};

export default ExampleStory;
