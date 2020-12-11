import React from "react";
import ListBox from "../../src";
import { fetchAPI } from "./helpers";

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

export default function LazyLoading() {
  const refCounter = React.useRef(0);
  const [filterData, setFilterData] = React.useState([]);

  async function handleChangeSearch(term) {
    if (term === "") {
      setFilterData([]);
      return;
    }

    const currentCounter = refCounter.current + 1;

    const response = await fetchAPI(term, 0, 20);
    // prevents from setting the answer if another fetch has been created
    // in your real app you might find a better way for doing this.
    if (currentCounter > refCounter.current) {
      setFilterData(() => {
        refCounter.current += 1;
        return [...response.data.results].map(item => {
          return {
            label: item.name,
            value: item.id,
            ...item,
          };
        });
      });
    }
  }

  const handleChangeSearchDebounce = debounce(handleChangeSearch, 450);

  function handleSelected(value) {
    console.log(`😎 `, value);
    setFilterData([]);
  }

  return (
    <div style={{ padding: "32px" }}>
      <ListBox onChangeSearch={handleChangeSearchDebounce} onSelected={handleSelected}>
        {filterData.map(option => {
          return (
            <ListBox.Option value={option.label} key={option.id} label={option.label}>
              {option.label}
            </ListBox.Option>
          );
        })}
      </ListBox>
    </div>
  );
}
