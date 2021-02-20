import React from "react";
import ListBox from "../../src";
import * as characters from "../fixtures/characters";

export const MultiWithFilter = () => (
  <ListBox isMulti>
    <ListBox.Filter />
    {characters.antiHeroes}
    {characters.villians}
    {characters.heroes}
  </ListBox>
);
