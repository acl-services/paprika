import React from "react";
import ListBox, { useListBoxWithTags } from "../../src";

const defaultData = [
  { name: "jack" },
  { name: "Rezzoch" },
  { name: "Thrull" },
  { name: "June Del Toro" },
  { name: "Skaelka" },
];

export default function App() {
  const { isSelected, filteredData, getSelectedOptions, listBoxWithTagsProps } = useListBoxWithTags({
    key: "name",
    defaultData,
    defaultFilteredData: defaultData,
    defaultSelectedKeys: ["June Del Toro"],
    filterAttribute: "name",
  });

  const selectedOptions = getSelectedOptions();
  return (
    <ListBox
      noResultsMessage="No results found, but you can add an email and then press enter..."
      selectedOptions={selectedOptions}
      tagLabelKey="name"
      {...listBoxWithTagsProps}
    >
      {filteredData.map(option => !isSelected(option.name) ? (
          <ListBox.Option key={option.name} label={option.name}>
            {option.name}
          </ListBox.Option>
        ) : null)}
    </ListBox>
  );
}
