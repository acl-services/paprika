import React from "react";
import InputExample from "./InputExample";
import { InputStory } from "../Input.stories.styles";
import Input from "../../src";

const SizesExampleStory = () => {
  return (
    <InputStory>
      <h3>
        <small>
          <code>size = small</code>
        </small>
      </h3>
      <InputExample placeholder="First Name" size={Input.types.size.SMALL} />
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
      <InputExample placeholder="First Name" size={Input.types.size.LARGE} />
    </InputStory>
  );
};

export default SizesExampleStory;
