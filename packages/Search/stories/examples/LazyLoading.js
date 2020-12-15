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
  const [selection, setSelection] = React.useState("");

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
    const { close, setInput } = actions;

    setInput(value.label);
    setSelection(value.label);
    close();
    console.log(`😎 `, value);
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
      {selection ? <span>Your selection: {selection}</span> : null}
    </div>
  );
}
