import React from "react";
import { v4 as uuidv4 } from "uuid";
import { number } from "@storybook/addon-knobs";
import { uniqueNamesGenerator, countries } from "unique-names-generator";
import ListBox from "../../../src";

const getKnobs = () => ({
  numOfItems: number("numberOfItems", 200),
});

const config = {
  dictionaries: [countries],
};

function handleChange(selectedIndexes) {
  console.log("selected indexes", selectedIndexes);
}

export default function LongList() {
  const { numOfItems } = getKnobs();
  const countriesArray = [...Array(numOfItems)].map(() => uniqueNamesGenerator(config));

  return (
    <ListBox isMulti onChange={handleChange}>
      {countriesArray.map(country => (
        <ListBox.Option label={country} key={`opt_${uuidv4()}`}>
          <div style={{ display: "flex", alignItems: "center" }}>{country}</div>
        </ListBox.Option>
      ))}
    </ListBox>
  );
}
