import React from "react";
import SearchIcon from "@paprika/icon/lib/Search";
import InputExample from "./InputExample";
import { InputStory } from "../Input.stories.styles";

const WithCustomClearIconStory = () => {
  return (
    <InputStory>
      <h3>
        <small>
          <code>custom clear icon</code>
        </small>
      </h3>
      <InputExample hasClearButton clearIcon={<SearchIcon />} placeholder="Search" />
    </InputStory>
  );
};

export default WithCustomClearIconStory;
