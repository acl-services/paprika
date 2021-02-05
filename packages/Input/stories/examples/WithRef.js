import React from "react";
import InputExample from "./InputExample";
import { InputStory } from "../Input.stories.styles";

const WithRefStory = () => {
  // TODO: Add example with React.useRef()
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
          <code>ref</code>
        </small>
      </h3>
      <InputExample ref={setRef} hasClearButton />
      <small>This text input will capture the focus after 1 second.</small>
    </InputStory>
  );
};

export default WithRefStory;
