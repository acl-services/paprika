import React from "react";
import { getStoryName } from "storybook/storyTree";

import ListBoxWithTags, { useListBoxWithTags } from "../src";

import animals from "./mocks";

const storyName = getStoryName("ListBoxWithTags");

export default {
  title: storyName,
};

const defaultFilteredData = animals.slice(0, 20);
const defaultData = animals;

function App({ size = "medium", isOpen = false }) {
  const { handleChange, isSelected, handleRemove, filteredData, handleFilter, getSelectedOptions } = useListBoxWithTags(
    "label",
    { defaultData, defaultFilteredData, defaultSelectedKeys: ["Aardvark", "Alpaca", "Anteater"] }
  );

  return (
    <div style={{ padding: "32px" }}>
      <div>size ({size}):</div>
      <ListBoxWithTags
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
            <ListBoxWithTags.Option value={option.label} key={option.label} label={option.label}>
              {option.label}
            </ListBoxWithTags.Option>
          ) : null;
        })}
      </ListBoxWithTags>
    </div>
  );
}

export const Sizes = () => (
  <>
    <App size="small" />
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
