import React from "react";
import Checkbox from "@paprika/checkbox";
import { v4 as uuidv4 } from "uuid";
import { uniqueNamesGenerator, countries } from "unique-names-generator";
import ListBox from "../../../src";

const config = {
  dictionaries: [countries],
};

const countriesArray = [...Array(200)].map(() => uniqueNamesGenerator(config));

function handleChange(selectedIndexes, items, clickedIndex, { eventType }) {
  console.log(selectedIndexes, eventType);
}

export default function LongList() {
  const { CHECKED, UNCHECKED } = Checkbox.types.state;

  return (
    <ListBox isMulti onChange={handleChange}>
      {countriesArray.map(country => (
        <ListBox.Option label={country} key={`opt_${uuidv4()}`}>
          {({ isSelected }) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checkedState={isSelected ? CHECKED : UNCHECKED}
                style={{ paddingRight: "8px", pointerEvents: "none" }}
              />
              {country}
            </div>
          )}
        </ListBox.Option>
      ))}
    </ListBox>
  );
}
