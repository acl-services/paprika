import React from "react";
import InputExample from "./InputExample";

const WithDisabledReadOnlyExampleStory = () => {
  return (
    <React.Fragment>
      <h3>
        <small>
          <code>isDisabled</code>
        </small>
      </h3>
      <InputExample isDisabled placeholder="First Name" />
      <InputExample isDisabled value="Sam Bennett" />
      <br />
      <h3>
        <small>
          <code>disabled</code>
        </small>
      </h3>
      <InputExample disabled placeholder="First Name" />
      <InputExample disabled value="Sam Bennett" />
      <br />
      <h3>
        <small>
          <code>isReadOnly</code>
        </small>
      </h3>
      <InputExample isReadOnly placeholder="First Name" />
      <InputExample isReadOnly value="Sam Bennett" />
      <InputExample isReadOnly value="This is a very long text to test that you can scroll this input horizontally." />
    </React.Fragment>
  );
};

export default WithDisabledReadOnlyExampleStory;
