import React from "react";
import Avatar, { getAvatarColors, getInitialsFromText } from "../../../Avatar/src";
import ListBox, { useListBoxWithTags } from "../../src";
import animals from "../mocks";

const defaultFilteredData = animals.slice(0, 20);
const defaultData = animals;

export default function CustomTrigger() {
  const { isSelected, filteredData, getSelectedOptions, listBoxWithTagsProps } = useListBoxWithTags({
    key: "label",
    defaultData,
    defaultFilteredData,
  });

  function renderTag({ option, Tag, onRemove }) {
    const color = getAvatarColors(option.label);
    const avatar = (
      <Avatar size={Avatar.types.size.SMALL} isRound backgroundColor={color.backgroundColor} color={color.fontColor}>
        {getInitialsFromText(option.label)}
      </Avatar>
    );
    return (
      <Tag onRemove={onRemove} key={option.label} avatar={avatar}>
        {option.label}
      </Tag>
    );
  }

  return (
    <ListBox
      noResultsMessage="No results found, but you can add an email and then press enter..."
      renderTag={renderTag}
      selectedOptions={getSelectedOptions()}
      {...listBoxWithTagsProps}
    >
      {filteredData.map(option => {
        if (typeof option.isCustom !== "undefined") {
          return null;
        }

        const color = getAvatarColors(option.label);
        return !isSelected(option.label) ? (
          <ListBox.Option value={option.label} key={option.label} label={option.label} isAvatar>
            <Avatar size={Avatar.types.size.MEDIUM} backgroundColor={color.backgroundColor} color={color.fontColor}>
              {getInitialsFromText(option.label)}
            </Avatar>
            <span style={{ fontSize: "1.3rem", paddingLeft: "8px", lineHeight: "48px" }}>{option.label}</span>
          </ListBox.Option>
        ) : null;
      })}
    </ListBox>
  );
}
