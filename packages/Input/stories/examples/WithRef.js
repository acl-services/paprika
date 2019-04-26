import React from "react";
import InputExample from "./InputExample";
import { InputStory } from "../Input.stories.styles";

const WithRefStory = () => {
  let $input;
  const setRef = node => {
    $input = node;
  };

  setTimeout(() => {
    $input.focus();
  }, 1000);

  return (
    <InputStory>
      <h3>
        <small>
          <code>inputRef</code>
        </small>
      </h3>
      <InputExample inputRef={setRef} />
      <small>This text input will capture the focus after 1 second.</small>
    </InputStory>
  );
};

export default WithRefStory;
