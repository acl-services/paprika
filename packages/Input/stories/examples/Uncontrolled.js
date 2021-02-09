import React from "react";
import { action } from "@storybook/addon-actions";
import { InputStory } from "../Input.stories.styles";
import Input from "../../src";

const UncontrolledExample = () => {
  return (
    <InputStory>
      <Input
        defaultValue="hello world"
        hasClearButton
        onChange={event => {
          action("value changed")(event.target.value);
        }}
      />
    </InputStory>
  );
};

export default UncontrolledExample;
