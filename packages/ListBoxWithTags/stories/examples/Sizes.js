import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Gap } from "storybook/assets/styles/common.styles";
import ListBox, { useListBoxWithTags } from "../../src";
import animals from "../mocks";

const defaultFilteredData = animals.slice(0, 20);
const defaultData = animals;

function App({ size = "medium", isOpen = false }) {
  const { isSelected, filteredData, getSelectedOptions, listBoxWithTagsProps } = useListBoxWithTags({
    key: "label",
    defaultData,
    defaultFilteredData,
    defaultSelectedKeys: ["Aardvark", "Alpaca", "Anteater"],
  });

  return (
    <>
      <StoryHeading level={2}>{size}</StoryHeading>
      <ListBox
        noResultsMessage="No results found, but you can add an email and then press enter..."
        selectedOptions={getSelectedOptions()}
        size={size}
        isOpen={isOpen}
        {...listBoxWithTagsProps}
      >
        {filteredData.map(option => {
          return !isSelected(option.label) ? (
            <ListBox.Option value={option.label} key={option.label} label={option.label}>
              {option.label}
            </ListBox.Option>
          ) : null;
        })}
      </ListBox>
    </>
  );
}

export default function Sizes() {
  return (
    <>
      <App size="medium" isOpen />
      <Gap.Large />
      <Gap.Large />
      <App size="large" />
    </>
  );
}
