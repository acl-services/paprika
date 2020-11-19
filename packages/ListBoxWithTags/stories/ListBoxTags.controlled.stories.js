import React from "react";
import { getStoryName } from "storybook/storyTree";
import ListBoxTags from "../src";
import animals from "./mocks";

const storyName = getStoryName("ListBoxWithTags");

export default {
  title: storyName,
};

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

const animalSubset = animals.slice(0, 20);

function App() {
  const [data] = React.useState(animalSubset);

  const [selectedKeys, setSelectedKeys] = React.useState(["Alpaca"]);
  const [dataFiltered, setDataFiltered] = React.useState(data);

  function checkIfIsSelected(id) {
    return selectedKeys.includes(id);
  }

  function handleChange(option, options, selectedOption) {
    setSelectedKeys(prev => {
      const prevClone = prev.slice(0);
      const id = options[selectedOption].value;
      if (prev.includes(id)) {
        prev.splice(prevClone.indexOf(id), 1);
        return prev;
      }

      return [...new Set(prevClone.concat([id]))];
    });

    setDataFiltered(data);
  }

  function handleRemove(option) {
    const index = selectedKeys.indexOf(option.label);
    if (index >= 0) {
      setSelectedKeys(prev => {
        const clone = prev.slice(0);
        clone.splice(index, 1);
        return clone;
      });
    }
  }

  function handleAddedOption(label) {
    const option = { label, isCustom: true };
    // this is just an example
    // but in real life you could have a list/dictionary with the
    // value of the selected items where you could push the new value
    animals.push(option);

    setDataFiltered(() => data);

    setSelectedKeys(prev => {
      return prev.concat(option.label);
    });
  }

  const handleFilterDebounce = React.useMemo(
    () =>
      debounce(({ search }) => {
        if (search === "") {
          setDataFiltered(data);
          return;
        }

        const result = ListBoxTags.filter(search, animals);
        setDataFiltered(result);
      }, 250),
    [data]
  );

  return (
    <div style={{ padding: "32px" }}>
      <ListBoxTags
        noResultsMessage="No results found, but you can add an email and then press enter..."
        onChange={handleChange}
        onCustomOption={handleAddedOption}
        onRemove={handleRemove}
        selectedOptions={selectedKeys.length ? animals.filter(item => selectedKeys.includes(item.label)) : []}
        filter={handleFilterDebounce}
      >
        {dataFiltered.map(option => {
          if (typeof option.isCustom !== "undefined") {
            return null;
          }

          return !checkIfIsSelected(option.label) ? (
            <ListBoxTags.Option value={option.label} key={option.label} label={option.label}>
              {option.label}
            </ListBoxTags.Option>
          ) : null;
        })}
      </ListBoxTags>
    </div>
  );
}

export const Controlled = () => <App />;
