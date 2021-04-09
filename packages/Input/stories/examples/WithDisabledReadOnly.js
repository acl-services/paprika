import React from "react";
// import InputExample from "./InputExample";
import { InputStory } from "../Input.stories.styles";
import Input from "../../src";

const WithDisabledReadOnlyExampleStory = () => {
  return (
    <InputStory>
      <h3>
        <small>
          <code>isDisabled</code>
        </small>
      </h3>
      <Input isDisabled placeholder="First Name" />
      <Input isDisabled value="Sam Bennett" />
      <br />
      <h3>
        <small>
          <code>disabled</code>
        </small>
      </h3>
      <Input disabled placeholder="First Name" />
      <Input disabled value="Sam Bennett" />
      <br />
      <h3>
        <small>
          <code>isReadOnly</code>
        </small>
      </h3>
      <Input isReadOnly placeholder="First Name" />
      <Input isReadOnly value="Sam Bennett" />
      <Input isReadOnly value="This is a very long text to test that you can scroll this input horizontally." />
    </InputStory>
  );
};

export default WithDisabledReadOnlyExampleStory;
