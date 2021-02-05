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
  const { isSelected, filteredData, getSelectedOptions, ...moreProps } = useListBoxWithTags({
    key: "name",
    defaultData,
    defaultFilteredData: defaultData,
    defaultSelectedKeys: ["June Del Toro"],
    filterAttribute: "name",
  });

  const selectedOptions = getSelectedOptions();
  return (
    <div style={{ padding: "32px" }}>
      <ListBox
        noResultsMessage="No results found, but you can add an email and then press enter..."
        selectedOptions={selectedOptions}
        tagLabelKey="name"
        {...moreProps}
      >
        {filteredData.map(option => {
          return !isSelected(option.name) ? <ListBox.Option label={option.name}>{option.name}</ListBox.Option> : null;
        })}
      </ListBox>
    </div>
  );
}
