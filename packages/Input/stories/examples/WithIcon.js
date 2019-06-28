import React from "react";
import SearchIcon from "@paprika/icon/lib/Search";
import InputExample from "./InputExample";

const WithIconStory = () => {
  return (
    <React.Fragment>
      <h3>
        <small>
          <code>icon</code>
        </small>
      </h3>
      <InputExample icon={<SearchIcon />} placeholder="Search" />
    </React.Fragment>
  );
};

export default WithIconStory;
