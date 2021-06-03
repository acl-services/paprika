import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Gap } from "storybook/assets/styles/common.styles";
import ListBox, { useListBoxWithTags } from "../../src";

const items = [
  { label: "Heirloom scenester chillwave" },
  { label: "Pickled paleo quinoa" },
  { label: "Readymade hammock succulents" },
];

function renderItems(isSelected) {
  return items.map(item =>
    !isSelected(item.label) ? (
      <ListBox.Option key={item.label} value={item.label} label={item.label}>
        {item.label}
      </ListBox.Option>
    ) : null
  );
}
export default function UIStatesExample() {
  const { isSelected, filteredData, getSelectedOptions, ...moreUseListBoxWithTagsProps } = useListBoxWithTags({
    key: "label",
    defaultData: items,
    defaultFilteredData: items,
  });

  return (
    <>
      <StoryHeading level={2}>isDisabled</StoryHeading>
      <ListBox {...moreUseListBoxWithTagsProps} isDisabled selectedOptions={[]}>
        {[]}
      </ListBox>
      <Gap.Small />
      <ListBox
        {...moreUseListBoxWithTagsProps}
        isDisabled
        selectedOptions={[{ label: "Heirloom scenester chillwave" }]}
      >
        {[]}
      </ListBox>
      <Gap />
      <StoryHeading level={2}>isReadOnly</StoryHeading>
      <ListBox {...moreUseListBoxWithTagsProps} isReadOnly selectedOptions={[]}>
        {[]}
      </ListBox>
      <Gap.Small />
      <ListBox
        {...moreUseListBoxWithTagsProps}
        isReadOnly
        selectedOptions={[{ label: "Heirloom scenester chillwave" }]}
      >
        {[]}
      </ListBox>
      <Gap />
      <StoryHeading level={2}>hasError</StoryHeading>
      <ListBox {...moreUseListBoxWithTagsProps} hasError selectedOptions={getSelectedOptions()}>
        {renderItems(isSelected)}
      </ListBox>

      <Gap />
      <StoryHeading level={2}>placeholder</StoryHeading>
      <ListBox
        {...moreUseListBoxWithTagsProps}
        selectedOptions={getSelectedOptions()}
        placeholder="Choose your favourite lorem hipsums"
      >
        {renderItems(isSelected)}
      </ListBox>
    </>
  );
}
