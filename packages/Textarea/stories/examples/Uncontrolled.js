import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Textarea from "../../src";

const UncontrolledExample = () => {
  return (
    <Story>
      <Textarea
        defaultValue="hello world"
        onChange={e => {
          console.log("the textareas new value is: ", e.target.value);
        }}
      />
    </Story>
  );
};

export default UncontrolledExample;
