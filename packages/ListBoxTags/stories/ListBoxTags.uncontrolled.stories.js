import React from "react";
import { getStoryName } from "storybook/storyTree";
import Avatar from "@paprika/avatar";
import { getAvatarColors } from "@paprika/avatar/lib/helpers";

import ListBoxTags, { useListBoxWithTags } from "../src";
import animals from "./mocks";

const storyName = getStoryName("ListBoxTags");

export default {
  title: storyName,
};

const defaultFilteredData = animals.slice(0, 20);
const defaultData = animals;

function App() {
  const {
    handleChange,
    isSelected,
    handleRemove,
    handleAddedOption,
    filteredData,
    handleFilter,
    getSelectedOptions,
  } = useListBoxWithTags("label", { defaultData, defaultFilteredData });

  function renderPill({ option, Pill, onRemove }) {
    const color = getAvatarColors(option.label);
    return (
      <Pill onRemove={onRemove} key={option.label}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              alignItems: "center",
              backgroundColor: color.backgroundColor,
              borderRadius: "50%",
              boxSizing: "border-box",
              color: color.fontColor,
              display: "flex",
              height: "24px",
              justifyContent: "center",
              marginRight: "8px",
              padding: "3px",
              width: "24px",
              fontSize: ".8rem",
              lineHeight: 1,
            }}
          >
            {option.label.substring(0, 2)}
          </div>
          {option.label}
        </div>
      </Pill>
    );
  }

  return (
    <div style={{ padding: "32px" }}>
      <ListBoxTags
        filter={handleFilter}
        noResultsMessage="No results found, but you can add an email and then press enter..."
        onChange={handleChange}
        onCustomOption={handleAddedOption()}
        onRemove={handleRemove}
        renderPill={renderPill}
        selectedOptions={getSelectedOptions()}
      >
        {filteredData.map(option => {
          if (typeof option.isCustom !== "undefined") {
            return null;
          }

          const color = getAvatarColors(option.label);
          return !isSelected(option.label) ? (
            <ListBoxTags.Option value={option.label} key={option.label} label={option.label}>
              <Avatar size={Avatar.types.size.SMALL} backgroundColor={color.backgroundColor} color={color.fontColor}>
                {option.label}
              </Avatar>
              <span style={{ fontSize: "1.3rem", paddingLeft: "8px" }}>{option.label}</span>
            </ListBoxTags.Option>
          ) : null;
        })}
      </ListBoxTags>
    </div>
  );
}

export const Uncontrolled = () => <App />;
