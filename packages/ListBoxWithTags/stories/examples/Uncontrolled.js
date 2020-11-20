import React from "react";
import ListBoxWithTags, { useListBoxWithTags } from "../../src";
import animals from "../mocks";

const defaultFilteredData = animals.slice(0, 20);
const defaultData = animals;

export default function App() {
  const { isSelected, filteredData, getSelectedOptions, ...moreUseListBoxWithTagsProps } = useListBoxWithTags("label", {
    defaultData,
    defaultFilteredData,
  });

  return (
    <div style={{ padding: "32px" }}>
      <ListBoxWithTags selectedOptions={getSelectedOptions()} {...moreUseListBoxWithTagsProps}>
        {filteredData.map(option => {
          if (typeof option.isCustom !== "undefined") {
            return null;
          }

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
