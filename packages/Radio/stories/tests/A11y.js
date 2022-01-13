import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Radio from "../../src";

const A11yStory = () => (
  <Story>
    <Radio.Group onChange={i => console.log(i)}>
      <Radio a11yText="Radio 1- Default is checked">Radio 1- Default is checked</Radio>
      <Radio>Radio 2</Radio>
      <Radio>Radio 3</Radio>
      <Radio isDisabled>Radio 4</Radio>
    </Radio.Group>
  </Story>
);

export default A11yStory;
