import React from "react";
import useI18n from "@paprika/l10n/lib/useI18n";
import { filter } from "../../ListBox/src/helpers/filter";

function prepareDataDictionary(key, data) {
  const dictionary = {};

  data.forEach(d => {
    dictionary[d[key]] = d;
  });

  return dictionary;
}

export default function useWithTags({
  key = null,
  defaultData = [],
  defaultFilteredData = [],
  defaultSelectedKeys = [],
  filterAttribute = "label",
}) {
  if (!key) throw new Error("Key is Required for useWithTags and should be one of the key (string) in your object");

  const [data, setData] = React.useState(defaultData);
  const { t } = useI18n();
  const [selectedKeys, setSelectedKeys] = React.useState(defaultSelectedKeys);
  const [filteredData, setFilteredData] = React.useState(defaultFilteredData);

  const dataDictionary = React.useMemo(() => {
    return prepareDataDictionary(key, data);
  }, [data, key]);

  function handleChange(option, options, selectedOption) {
    setSelectedKeys(prev => {
      const prevClone = prev.slice(0);

      const { id: idProp, label, value } = options[selectedOption].content.props;
      const id = idProp || value || label;

      if (!id)
        throw Error(
          "<ListBox.Option /> requires to have a unique string label that can be use for a11y purposes and as identifier"
        );

      if (prev.includes(id)) {
        prev.splice(prevClone.indexOf(id), 1);
        return prev;
      }

      return [...new Set(prevClone.concat([id]))];
    });

    setFilteredData(defaultData);
  }

  function getSelectedOptions() {
    return selectedKeys.map(key => dataDictionary[key]);
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

  const defaultFactoryAddCustomOption = label => ({ label, isCustom: true });
  const handleAddCustomOption = (func = defaultFactoryAddCustomOption) => label => {
    // useReducer might be a better alternative

    const option = func(label);

    setData(prev => {
      return prev.concat(option);
    });

    setSelectedKeys(prev => {
      return prev.concat(option[key]);
    });

    setFilteredData(defaultData);
  };

  function handleFilter({ search }) {
    const result = filter(search, data, filterAttribute);

    if (defaultData.length === selectedKeys.length) return;

    setFilteredData(result);
  }

  return {
    data,
    filteredData,
    selectedKeys,
    setSelectedKeys,
    isSelected,
    getSelectedOptions,
    filter: handleFilter,
    noResultsMessage: t("listBoxWithTags.no_results_found"),
    onChange: handleChange,
    onAddCustomOption: handleAddCustomOption,
    onRemove: handleRemove,
  };
}
