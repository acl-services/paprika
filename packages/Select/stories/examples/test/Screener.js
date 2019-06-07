import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Select from "../SelectExample";

const ScreenerStory = () => (
  <Story>
    <Select placeholder="Tell me a story..." size="small" a11yText="story">
      <option value="Pepsi">Pepsi</option>
      <option value="Coke">Coke</option>
    </Select>
    <Select placeholder="Tell me a story..." a11yText="story">
      <option value="Pepsi">Pepsi</option>
      <option value="Coke">Coke</option>
    </Select>
    <Select placeholder="Tell me a story..." size="large" a11yText="story">
      <option value="Pepsi">Pepsi</option>
      <option value="Coke">Coke</option>
    </Select>
    <Select isDisabled value="This is my disabled story" a11yText="story">
      <option value="Pepsi">Pepsi</option>
      <option value="Coke">Coke</option>
    </Select>
    <Select isReadOnly value="This is my read only story" a11yText="story">
      <option value="Pepsi">Pepsi</option>
      <option value="Coke">Coke</option>
    </Select>
    <Select hasError value="This is my error story" a11yText="story">
      <option value="Pepsi">Pepsi</option>
      <option value="Coke">Coke</option>
    </Select>
    <Select value="Pepsi" a11yText="story">
      <option value="Pepsi">Pepsi</option>
      <option value="Coke">Coke</option>
    </Select>
  </Story>
);

export default ScreenerStory;
