import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button/lib/Button";
import Textarea from "../../src";

const UncontrolledExample = () => {
  const [defaultState, setDefaultState] = React.useState("hello world");
  return (
    <Story>
      <Textarea
        defaultValue={defaultState}
        onChange={e => {
          console.log("the textareas new value is: ", e.target.value);
        }}
      />
      <Button onClick={() => setDefaultState("updated default state")}>Change default state value</Button>
    </Story>
  );
};

export default UncontrolledExample;
