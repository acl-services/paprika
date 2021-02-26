import React from "react";
import ListBox from "../../src";
import * as characters from "../fixtures/characters";

export const A11yMultiStory = () => (
  <ListBox isMulti>
    <ListBox.Filter />
    <ListBox.Divider>Test</ListBox.Divider>
    <ListBox.RawItem>Hello!</ListBox.RawItem>
    {characters.villians}
    {characters.heroes}
    <ListBox.Footer />
  </ListBox>
);

export const A11ySingleStory = () => (
  <ListBox>
    {characters.villians}
    {characters.heroes}
  </ListBox>
);
