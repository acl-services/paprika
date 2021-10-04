import React from "react";
import ListBox, { useListBoxWithTags } from "../../src";
import animals from "../mocks";

// defaultData and filteredData have the same size.
const defaultFilteredData = animals.slice(0, 20);
const defaultData = defaultFilteredData;

export default function App() {
  const { isSelected, filteredData, getSelectedOptions, listBoxWithTagsProps } = useListBoxWithTags({
    key: "label",
    defaultData,
    defaultFilteredData,
    defaultSelectedKeys: ["Alpaca", "Ant", "Ape", "Armadillo"],
  });

  return (
    <ListBox isOpen allOptionsAreSelected selectedOptions={getSelectedOptions()} {...listBoxWithTagsProps}>
      {filteredData.map(option =>
        !isSelected(option.label) ? (
          <ListBox.Option value={option.label} key={option.label} label={option.label}>
            {option.label}
          </ListBox.Option>
        ) : null
      )}
    </ListBox>
  );
}
