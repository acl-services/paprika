import React from "react";
import InputExample from "./InputExample";

const WithRefStory = () => {
  let $input;
  const setRef = node => {
    $input = node;
  };

  setTimeout(() => {
    $input.focus();
  }, 1000);

  return (
    <React.Fragment>
      <h3>
        <small>
          <code>inputRef</code>
        </small>
      </h3>
      <InputExample inputRef={setRef} />
      <small>This text input will capture the focus after 1 second.</small>
    </React.Fragment>
  );
};

export default WithRefStory;
