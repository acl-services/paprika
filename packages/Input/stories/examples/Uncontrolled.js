import React from "react";
import Input from "../../src";
import { InputStory } from "../Input.stories.styles";

const UncontrolledExample = () => {
  return (
    <InputStory>
      <Input
        defaultValue="hello world"
        onChange={e => {
          console.log("the inputs new value is: ", e.target.value);
        }}
      />
    </InputStory>
  );
};

export default UncontrolledExample;
