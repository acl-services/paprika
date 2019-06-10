import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Select from "../../../src/Select";

const A11yStory = () => {
  return (
    <Story>
      <Select placeholder="select text passes contrast..." a11yText="select" />
      <Select isReadOnly placeholder="select text passes contrast..." a11yText="select" />
      <Select isDisabled placeholder="select text passes contrast..." a11yText="select" />
    </Story>
  );
};

export default A11yStory;
