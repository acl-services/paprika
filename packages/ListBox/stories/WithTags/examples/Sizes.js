import React from "react";
import ListBox, { useListBoxWithTags } from "../../../src/WithTags";

import animals from "../mocks";

const defaultFilteredData = animals.slice(0, 20);
const defaultData = animals;

function App({ size = "medium", isOpen = false }) {
  const { handleChange, isSelected, handleRemove, filteredData, handleFilter, getSelectedOptions } = useListBoxWithTags(
    {
      key: "label",
      defaultData,
      defaultFilteredData,
      defaultSelectedKeys: ["Aardvark", "Alpaca", "Anteater"],
    }
  );

  return (
    <div style={{ padding: "32px" }}>
      <div>size ({size}):</div>
      <ListBox
        filter={handleFilter}
        noResultsMessage="No results found, but you can add an email and then press enter..."
        onChange={handleChange}
        onRemove={handleRemove}
        selectedOptions={getSelectedOptions()}
        size={size}
        isOpen={isOpen}
      >
        {filteredData.map(option => {
          return !isSelected(option.label) ? (
            <ListBox.Option value={option.label} key={option.label} label={option.label}>
              {option.label}
            </ListBox.Option>
          ) : null;
        })}
      </ListBox>
    </div>
  );
}

export default function Sizes() {
  return (
    <>
      <App size="medium" isOpen />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <App size="large" />
    </>
  );
}
