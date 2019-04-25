import React from "react";
import SearchIcon from "@paprika/icon/Search";
import BasicStory from "./Basic";
import { InputStory } from "../Input.stories.styles";

const WithIconStory = () => {
  return (
    <InputStory>
      <h3>
        <small>
          <code>icon</code>
        </small>
      </h3>
      <BasicStory icon={<SearchIcon />} placeholder="Search" />
    </InputStory>
  );
};

export default WithIconStory;
