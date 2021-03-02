import React from "react";
import ListBox, { useListBoxWithTags } from "../../src";
import animals from "../mocks";

const defaultFilteredData = animals.slice(0, 20);
const defaultData = animals;

export default function App() {
  const { isSelected, filteredData, getSelectedOptions, ...moreUseListBoxWithTagsProps } = useListBoxWithTags({
    key: "label",
    defaultData,
    defaultFilteredData,
  });

  return (
    <ListBox selectedOptions={getSelectedOptions()} {...moreUseListBoxWithTagsProps}>
      {filteredData.map(option => {
        return !isSelected(option.label) ? (
          <ListBox.Option value={option.label} key={option.label} label={option.label}>
            {option.label}
          </ListBox.Option>
        ) : null;
      })}
    </ListBox>
  );
}
