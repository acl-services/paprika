import React from "react";
import SearchIcon from "@paprika/icon/lib/Search";
import InputExample from "./InputExample";
import { InputStory } from "../Input.stories.styles";

const WithIconStory = () => {
  return (
    <InputStory>
      <h3>
        <small>
          <code>icon</code>
        </small>
      </h3>
      <InputExample icon={<SearchIcon />} placeholder="Search" />
    </InputStory>
  );
};

export default WithIconStory;
