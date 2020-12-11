import React from "react";
import ListBox from "../../src";

const data = [
  { label: "vendor (assets type)" },
  { label: "Vendor Controls Critically (questionnaire)" },
  { label: "Vendor Control full (questionnaire)" },
  { label: "Types and more (assets)" },
  { label: "Investment and controls" },
  { label: "Objectives for audit" },
  { label: "Assets for third party vendor" },
  { label: "Finding automatic vendor requirements" },
];

export default function Controlled() {
  const [filterData, setFilterData] = React.useState(data);
  function handleChangeSearch(term) {
    setFilterData(ListBox.filter(term, data));
  }

  function handleSelected(value, { close, cleanInput }) {
    console.log(`😎 `, value);
    setFilterData(data);
    close();
    cleanInput();
  }

  return (
    <div style={{ padding: "32px" }}>
      <ListBox onChangeSearch={handleChangeSearch} onSelected={handleSelected}>
        {filterData.map(option => {
          return (
            <ListBox.Option value={option.label} key={option.label} label={option.label}>
              {option.label}
            </ListBox.Option>
          );
        })}
      </ListBox>
    </div>
  );
}
