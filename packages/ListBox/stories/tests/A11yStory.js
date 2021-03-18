import React from "react";
import ListBox from "../../src";
import * as characters from "../fixtures/characters";

export const A11yMultiStory = () => (
  <ListBox isMulti>
    <ListBox.Filter />
    <ListBox.Divider>Test</ListBox.Divider>
    {characters.villians}
    <ListBox.RawItem>Hello!</ListBox.RawItem>
    {characters.heroes}
  </ListBox>
);

export const A11ySingleStory = () => (
  <ListBox>
    {characters.villians}
    {characters.heroes}
  </ListBox>
);
