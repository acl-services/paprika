import React from "react";
import FormElement from "@paprika/form-element";
import L10n from "@paprika/l10n";
import ListBox, { useListBoxWithTags } from "../../src";

const items = [
  { label: "Heirloom scenester chillwave" },
  { label: "Pickled paleo quinoa" },
  { label: "readymade hammock succulents" },
];

export default function FormElementExample() {
  const { isSelected, filteredData, getSelectedOptions, ...moreUseListBoxWithTagsProps } = useListBoxWithTags({
    key: "label",
    defaultData: items,
    defaultFilteredData: items,
  });

  return (
    <L10n>
      <FormElement isRequired>
        <FormElement.Label>Lorem Hipsum Label</FormElement.Label>
        <FormElement.Instructions>Scenester brunch instructions</FormElement.Instructions>
        <FormElement.Content>
          {() => (
            // a11yProps => (
            <ListBox
              {...moreUseListBoxWithTagsProps}
              data-qa-anchor="listbox-tags-demo"
              hasError
              selectedOptions={getSelectedOptions()}
            >
              {/* <ListBox.A11y {...a11yProps} /> */}
              {items.map(item => {
                return !isSelected(item.label) ? (
                  <ListBox.Option key={item.label} value={item.label} label={item.label}>
                    {item.label}
                  </ListBox.Option>
                ) : null;
              })}
            </ListBox>
          )}
        </FormElement.Content>
        <FormElement.Error>Error: lo-fi tumeric biodiesel</FormElement.Error>
      </FormElement>
    </L10n>
  );
}
