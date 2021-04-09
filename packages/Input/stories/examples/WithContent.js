import React from "react";
// import InputExample from "./InputExample";
import { InputStory } from "../Input.stories.styles";
import Input from "../../src";

const WithContentExampleStory = () => {
  return (
    <InputStory>
      <Input value="Sam Bennett" a11yText="Sam Bennett" />
      <br />
      <h3>
        <small>
          <code>hasClearButton</code>
        </small>
      </h3>
      <Input value="Sam Bennett" a11yText="Sam Bennett" hasClearButton />
    </InputStory>
  );
};

export default WithContentExampleStory;
