import React from "react";
import ListBox from "../../../src/WithSearch";

export default function Controlled() {
  const [data] = React.useState([{ label: "car" }, { label: "truck" }, { label: "jet" }, { label: "boat" }]);

  function handleChange(index, options) {
    console.log("options:", options[index]);
  }

  return (
    <div style={{ padding: "32px" }}>
      <ListBox
        noResultsMessage="No results found, but you can add an email and then press enter..."
        onChange={handleChange}
      >
        {data.map(option => {
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
