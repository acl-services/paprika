import React from "react";
import InputExample from "./InputExample";
import { InputStory } from "../Input.stories.styles";

const TypesExampleStory = () => {
  return (
    <InputStory>
      <h3>
        <small>
          <code>type=&quot;text&quot;</code>
        </small>
      </h3>
      <InputExample type="text" value="p@$$w0rD" />
      <br />
      <h3>
        <small>
          <code>type=&quot;password&quot;</code>
        </small>
      </h3>
      <InputExample type="password" value="p@$$w0rD" />
      <br />
      <h3>
        <small>
          <code>type=&quot;number&quot;</code>
        </small>
      </h3>
      Don&apos;t do this. Use the &lt;InputNumber&gt; component.
    </InputStory>
  );
};

export default TypesExampleStory;
