import React from "react";
import InputExample from "./InputExample";

const SizesExampleStory = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default SizesExampleStory;
