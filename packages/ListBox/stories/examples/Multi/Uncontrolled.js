import React from "react";
import ListBox from "../../../src";
import * as characters from "../../fixtures/characters";

export const UncontrolledListBox = () => (
  <ListBox
    isInline
    isMulti
    onChange={selectedOptions => {
      console.log(selectedOptions);
    }}
  >
    <ListBox.Filter />
    <ListBox.Divider key="superheroes_divider">Superheroes</ListBox.Divider>
    {characters.antiHeroesRaw.map((item, index) => (
      <ListBox.Option key={item.label} defaultIsSelected={Boolean(index % 2)}>
        {item.label}
      </ListBox.Option>
    ))}
  </ListBox>
);
