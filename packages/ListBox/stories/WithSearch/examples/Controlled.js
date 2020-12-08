import React from "react";
import ListBox from "../../../src/WithSearch";

// please use a proper debounce function in a your application
const debounce = (func, wait) => {
  let idTimeout = null;
  return (...args) => {
    clearTimeout(idTimeout);
    idTimeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

export default function Controlled() {
  const [data] = React.useState([{ label: "car" }, { label: "truck" }, { label: "jet" }, { label: "boat" }]);

  return (
    <div style={{ padding: "32px" }}>
      <ListBox
        noResultsMessage="No results found, but you can add an email and then press enter..."
        onChange={() => {}}
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
