import React from "react";
import * as characters from "../../fixtures/characters";
import ListBox from "../../../src";

export const DefaultIsSelected = () => {
  return (
    <ListBox
      isInline
      onChange={activeOptionIndex => {
        console.log(activeOptionIndex);
      }}
    >
      {characters.antiHeroesRaw.map((item, index) => {
        return (
          <ListBox.Option key={item.label} defaultIsSelected={index === 4}>
            {item.label}
          </ListBox.Option>
        );
      })}
    </ListBox>
  );
};
