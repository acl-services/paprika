import React from "react";
import ListBox from "../../../src";
import * as characters from "../../fixtures/characters";

export const GroupsAndSelectedOptions = () => (
  <ListBox isMulti isOpen>
    <ListBox.Divider>Antiheroes</ListBox.Divider>
    <ListBox.Option isSelected>Michael Corleone</ListBox.Option>
    {characters.antiHeroes}
    <ListBox.Option isSelected>Mad Max</ListBox.Option>
    <ListBox.Divider>Villians</ListBox.Divider>
    {characters.villians}
    <ListBox.Divider>Heroes</ListBox.Divider>
    <ListBox.Option isSelected>Aquaman</ListBox.Option>
    {characters.heroes}
  </ListBox>
);
