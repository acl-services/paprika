import React from "react";
import InputExample from "./InputExample";
import { InputStory } from "../Input.stories.styles";

const SizesExampleStory = () => {
  return (
    <InputStory>
      <h3>
        <small>
          <code>size = small</code>
        </small>
      </h3>
      <InputExample placeholder="First Name" size="small" />
      <br />
      <h3>
        <small>
          <code>size = medium</code> (default)
        </small>
      </h3>
      <InputExample placeholder="First Name" />
      <br />
      <h3>
        <small>
          <code>size = large</code>
        </small>
      </h3>
      <InputExample placeholder="First Name" size="large" />
    </InputStory>
  );
};

export default SizesExampleStory;
