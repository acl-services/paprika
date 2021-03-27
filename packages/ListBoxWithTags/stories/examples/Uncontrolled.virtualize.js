import React from "react";
import ListBox, { useListBoxWithTags } from "../../src";
import animals from "../mocks";

const sizeItemCount = 2000;
const defaultData = Array(sizeItemCount)
  .fill()
  .map((_, index) => {
    return { ...animals[index % animals.length], id: index };
  });

// const defaultFilteredData = defaultData;

export default function App() {
  const [selectedMultiple, setSelectedMultiple] = React.useState(new Set([animals[1], animals[3], animals[6]]));
  const [searchResults, setSearchResults] = React.useState(null);
  const [itemCount, setItemCount] = React.useState(sizeItemCount);
  const [key, setKey] = React.useState("");

  function handleChange() {}

  function handleAddedOption() {}

  function handleRemove() {}

  function handleFilter({ search }) {
    if (search === "") {
      setSearchResults(null);
      setItemCount(sizeItemCount);
    }

    const result = defaultData.filter(item => {
      return item.label.includes(search);
    });

    setItemCount(result.length);
    setSearchResults(result);
    setKey(search);
  }

  return (
    <ListBox
      noResultsMessage="No results found"
      onChange={handleChange}
      onAddCustomOption={handleAddedOption}
      onRemove={handleRemove}
      selectedOptions={[]}
      filter={handleFilter}
    >
      <ListBox.Virtualize
        idKey={key}
        isOptionSelected={index => {
          return selectedMultiple.has(defaultData[index]);
        }}
        onClickClear={() => {
          setSelectedMultiple(new Set());
        }}
        onSelectedOptions={() => {
          return Array.from(selectedMultiple);
        }}
        onRenderLabel={option => {
          return `${option.label}`;
        }}
        onRenderOption={props => {
          return (
            <ListBox.Option {...props} label={`${props.index}`}>
              {searchResults !== null ? searchResults[props.index].label : defaultData[props.index].label}
            </ListBox.Option>
          );
        }}
        itemCount={itemCount}
      />
    </ListBox>
  );
}
