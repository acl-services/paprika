import React from "react";
import Avatar from "@paprika/avatar";
import { getAvatarColors } from "@paprika/avatar/lib/helpers";
import ListBox, { useListBoxWithTags } from "../../../src/WithTags";
import animals from "../mocks";

const defaultFilteredData = animals.slice(0, 20);
const defaultData = animals;

// prettier-ignore
const styleForPill = (color) => ({ alignItems: "center", backgroundColor: color.backgroundColor, borderRadius: "50%", boxSizing: "border-box", color: color.fontColor, display: "flex", height: "24px", justifyContent: "center", marginRight: "8px", padding: "3px", width: "24px", fontSize: ".8rem", lineHeight: 1})

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
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={styleForPill(color)}>{option.label.substring(0, 2)}</div>
          {option.label}
        </div>
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
              <Avatar size={Avatar.types.size.SMALL} backgroundColor={color.backgroundColor} color={color.fontColor}>
                {option.label}
              </Avatar>
              <span style={{ fontSize: "1.3rem", paddingLeft: "8px" }}>{option.label}</span>
            </ListBox.Option>
          ) : null;
        })}
      </ListBox>
    </div>
  );
}
