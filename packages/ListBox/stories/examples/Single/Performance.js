import React from "react";
import Checkbox from "@paprika/checkbox";
// import { Gap, CodeHeading } from "storybook/assets/styles/common.styles";
import { v4 as uuidv4 } from "uuid";
import ListBox from "../../../src";
// import * as characters from "../../fixtures/characters";

const villians = [
  "The Joker",
  "Darth Vader",
  "Hannibal Lecter",
  "Lord Voldemort",
  "Freddy Krueger",
  "Palpatine",
  "Agent Smith",
  "Jimmy craig",
  "john smith",
  "tristan jasper",
];

const largeArray = [
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
  ...villians,
];

function handleChange(selectedIndexes, items, clickedIndex, { dispatch, actionTypes, eventType }) {
  console.log(selectedIndexes, eventType);
}

export const Performance = () => {
  const { CHECKED, UNCHECKED } = Checkbox.types.state;

  return (
    <ListBox isMulti onChange={handleChange}>
      {largeArray.map(villian => (
        <ListBox.Option label={villian} key={`opt_${uuidv4()}`}>
          {({ isSelected }) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checkedState={isSelected ? CHECKED : UNCHECKED}
                style={{ paddingRight: "8px", pointerEvents: "none" }}
              />
              {villian}
            </div>
          )}
        </ListBox.Option>
      ))}
    </ListBox>
  );
};
