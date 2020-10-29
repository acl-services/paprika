import React from "react";
import { filter } from "./helpers";

function prepareDataDictionary(key, data) {
  const dictionary = {};
  data.forEach(d => {
    dictionary[d[key]] = d;
  });

  return dictionary;
}

export default function useListBoxWithTags(
  key,
  { defaultData = [], defaultFilteredData = [], defaultSelectedKeys = [] }
) {
  if (!key)
    throw new Error("Key is Required for useListBoxWithTags and should be one of the key (string) in your object");

  const [data, setData] = React.useState(defaultData);
  const [dataDictionary, setDataDictionary] = React.useState({});
  const [selectedKeys, setSelectedKeys] = React.useState(defaultSelectedKeys);
  const [filteredData, setFilteredData] = React.useState(defaultFilteredData);

  React.useEffect(() => {
    const dictionary = prepareDataDictionary(key, data);
    setDataDictionary(dictionary);
  }, [data, key]);

  function handleChange(option, options, selectedOption) {
    setSelectedKeys(prev => {
      const prevClone = prev.slice(0);
      const id = options[selectedOption][key];
      if (prev.includes(id)) {
        prev.splice(prevClone.indexOf(id), 1);
        return prev;
      }

      return [...new Set(prevClone.concat([id]))];
    });

    setFilteredData(defaultData);
  }

  function getSelectedOptions() {
    if (selectedKeys.length) {
      const options = [];
      const cloneDataDictionary = { ...dataDictionary };
      selectedKeys.forEach(key => {
        options.push(cloneDataDictionary[key]);
      });

      return options;
    }

    return [];
  }

  function handleRemove(option) {
    const index = selectedKeys.indexOf(option[key]);
    if (index >= 0) {
      setSelectedKeys(prev => {
        const clone = prev.slice(0);
        clone.splice(index, 1);
        return clone;
      });
    }
  }

  function isSelected(id) {
    return selectedKeys.includes(id);
  }

  const handleAddedOption = (func = label => ({ label, isCustom: true })) => label => {
    // useReducer might be a better alternative

    const option = func(label);
    setData(prev => {
      return prev.concat(option);
    });

    setSelectedKeys(prev => {
      return prev.concat(option[key]);
    });

    setDataDictionary(prev => {
      return { ...prev, [option[key]]: option };
    });

    setFilteredData(defaultData);
  };

  function handleFilter({ search }) {
    setFilteredData(filter(search, data));
  }

  return {
    data,
    filteredData,
    selectedKeys,
    setSelectedKeys,
    handleChange,
    handleFilter,
    isSelected,
    handleRemove,
    handleAddedOption,
    getSelectedOptions,
  };
}
