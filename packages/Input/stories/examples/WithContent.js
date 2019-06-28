import React from "react";
import InputExample from "./InputExample";

const WithContentExampleStory = () => {
  return (
    <React.Fragment>
      <InputExample value="Sam Bennett" a11yText="Sam Bennett" />
      <br />
      <h3>
        <small>
          <code>hasClearButton</code>
        </small>
      </h3>
      <InputExample value="Sam Bennett" a11yText="Sam Bennett" hasClearButton />
    </React.Fragment>
  );
};

export default WithContentExampleStory;
