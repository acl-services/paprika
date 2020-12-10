import React from "react";
import Avatar, { getAvatarColors, getInitialsFromText } from "../../../../Avatar/src";
import ListBox, { useListBoxWithTags } from "../../../src/WithTags";
import animals from "../mocks";

const defaultFilteredData = animals.slice(0, 20);
const defaultData = animals;

export default function CustomTrigger() {
  const { isSelected, filteredData, getSelectedOptions, ...moreUseListBoxWithTagsProps } = useListBoxWithTags({
    key: "label",
    defaultData,
    defaultFilteredData,
  });

  function renderPill({ option, Pill, onRemove }) {
    const color = getAvatarColors(option.label);
    return (
      <Pill onRemove={onRemove} key={option.label}>
        <Avatar size={Avatar.types.size.SMALL} isRound backgroundColor={color.backgroundColor} color={color.fontColor}>
          {getInitialsFromText(option.label)}
        </Avatar>
        {option.label}
      </Pill>
    );
  }

  return (
    <div style={{ padding: "32px" }}>
      <ListBox
        noResultsMessage="No results found, but you can add an email and then press enter..."
        renderPill={renderPill}
        selectedOptions={getSelectedOptions()}
        {...moreUseListBoxWithTagsProps}
      >
        {filteredData.map(option => {
          if (typeof option.isCustom !== "undefined") {
            return null;
          }

          const color = getAvatarColors(option.label);
          return !isSelected(option.label) ? (
            <ListBox.Option value={option.label} key={option.label} label={option.label}>
              <Avatar size={Avatar.types.size.MEDIUM} backgroundColor={color.backgroundColor} color={color.fontColor}>
                {getInitialsFromText(option.label)}
              </Avatar>
              <span style={{ fontSize: "1.3rem", paddingLeft: "8px" }}>{option.label}</span>
            </ListBox.Option>
          ) : null;
        })}
      </ListBox>
    </div>
  );
}
