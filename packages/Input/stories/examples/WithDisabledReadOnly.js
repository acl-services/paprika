import React from "react";
import BasicStory from "./Basic";
import { InputStory } from "../Input.stories.styles";

const WithDisabledReadOnlyExampleStory = () => {
  return (
    <InputStory>
      <h3>
        <small>
          <code>isDisabled</code>
        </small>
      </h3>
      <BasicStory isDisabled placeholder="First Name" />
      <BasicStory isDisabled value="Sam Bennett" />
      <br />
      <h3>
        <small>
          <code>disabled</code>
        </small>
      </h3>
      <BasicStory disabled placeholder="First Name" />
      <BasicStory disabled value="Sam Bennett" />
      <br />
      <h3>
        <small>
          <code>isReadOnly</code>
        </small>
      </h3>
      <BasicStory isReadOnly placeholder="First Name" />
      <BasicStory isReadOnly value="Sam Bennett" />
      <BasicStory isReadOnly value="This is a very long text to test that you can scroll this input horizontally." />
    </InputStory>
  );
};

export default WithDisabledReadOnlyExampleStory;
