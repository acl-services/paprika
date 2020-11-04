import React from "react";
import { getStoryName } from "storybook/storyTree";

import ListBoxTags, { useListBoxWithTags } from "../src";
import animals from "./mocks";

const storyName = getStoryName("ListBoxTags");

export default {
  title: storyName,
};

const defaultFilteredData = animals.slice(0, 20);
const defaultData = animals;

function App() {
  const {
    handleChange,
    isSelected,
    handleRemove,
    handleAddedOption,
    filteredData,
    handleFilter,
    getSelectedOptions,
  } = useListBoxWithTags("label", { defaultData, defaultFilteredData });

  function renderPill({ option, Pill, onRemove }) {
    return (
      <Pill onRemove={onRemove} key={option.label}>
        {option.label}
      </Pill>
    );
  }

  return (
    <div style={{ padding: "32px" }}>
      <ListBoxTags
        filter={handleFilter}
        noResultsMessage="No results found, but you can add an email and then press enter..."
        onChange={handleChange}
        onCustomOption={handleAddedOption()}
        onRemove={handleRemove}
        renderPill={renderPill}
        selectedOptions={getSelectedOptions()}
      >
        {filteredData.map(option => {
          if (typeof option.isCustom !== "undefined") {
            return null;
          }

          return !isSelected(option.label) ? (
            <ListBoxTags.Option value={option.label} key={option.label} label={option.label}>
              {option.label}
            </ListBoxTags.Option>
          ) : null;
        })}
      </ListBoxTags>
    </div>
  );
}

export const Uncontrolled = () => <App />;
