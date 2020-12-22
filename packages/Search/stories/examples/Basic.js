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
  const [valueSelected, setValueSelected] = React.useState("");
  function handleChangeSearch(term) {
    setFilterData(ListBox.filter(term, data));
  }

  function handleSelected(value, actions) {
    /**
     * after receiving the selected value there are some alternatives paths you might want to take
     * 1. Close the popover
     * 2. Set the selected value on the input
     * 3. Clear the input
     *
     * This actions might change depending of what are you implementing.
     * all these options are possible you can invoke any of the actions to do that.
     * if there is something else specific you might want to do you either can add expose it on the Search.js File
     * or request help from the paprika team.
     * */
    console.log(actions);
    const { setInput, close } = actions;

    setFilterData(ListBox.filter(value.label, data));
    setInput(value.label);
    close();
    console.log(value);
    setValueSelected(`→${value.label}`);
  }

  return (
    <div style={{ padding: "32px" }}>
      {valueSelected}
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
