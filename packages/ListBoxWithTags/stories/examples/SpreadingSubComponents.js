import React from "react";
import ListBoxWithTags, { useListBoxWithTags } from "../../src";
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
    <ListBoxWithTags selectedOptions={getSelectedOptions()} {...moreUseListBoxWithTagsProps}>
      <ListBoxWithTags.Box data-test-anchor="ListBoxWithTags.Box-test" />
      <ListBoxWithTags.Filter data-test-anchor="ListBoxWithTags.Filter-test" />
      <ListBoxWithTags.Trigger data-test-anchor="ListBoxWithTags.Trigger-test" />
      {filteredData.map(option => {
        return !isSelected(option.label) ? (
          <ListBoxWithTags.Option value={option.label} key={option.label} label={option.label}>
            {option.label}
          </ListBoxWithTags.Option>
        ) : null;
      })}
    </ListBoxWithTags>
  );
}
