import React from "react";
import { ButtonStory } from "../../Button.stories.styles";
import Button from "../../../src";

export default function ButtonStates() {
  return (
    <ButtonStory>
      <Button isActive>Active</Button>
      <Button isDisabled>Disabled</Button>
      <Button isPending>Pending</Button>
    </ButtonStory>
  );
}
