import React from "react";
import BasicStory from "./Basic";
import { InputStory } from "../Input.stories.styles";

const WithContentExampleStory = () => {
  return (
    <InputStory>
      <BasicStory value="Sam Bennett" a11yText="Sam Bennett" />
      <br />
      <h3>
        <small>
          <code>hasClearButton</code>
        </small>
      </h3>
      <BasicStory value="Sam Bennett" a11yText="Sam Bennett" hasClearButton />
    </InputStory>
  );
};

export default WithContentExampleStory;
