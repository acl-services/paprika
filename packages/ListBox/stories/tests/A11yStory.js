import React from "react";
import ListBox from "../../src";

export const A11yMultiStory = () => (
  <ListBox isMulti>
    <ListBox.Filter />
    <ListBox.Divider>Test</ListBox.Divider>
    <ListBox.Option>The Joker</ListBox.Option>
    <ListBox.Option>Darth Vader</ListBox.Option>
    <ListBox.RawItem>Raw Item</ListBox.RawItem>
  </ListBox>
);

export const A11ySingleStory = () => (
  <ListBox>
    <ListBox.Filter />
    <ListBox.Option>The Joker</ListBox.Option>
    <ListBox.Option>Darth Vader</ListBox.Option>
  </ListBox>
);
