import React from "react";
import ListBox from "../../src";
import animals from "../mocks";

const sizeItemCount = 2000;
const defaultData = Array(sizeItemCount)
  .fill()
  .map((_, index) => {
    return { ...animals[index % animals.length], id: index };
  });

// const defaultFilteredData = defaultData;

export default function App() {
  const [selectedMultiple, setSelectedMultiple] = React.useState(
    new Set([animals[35].id, animals[36].id, animals[37].id])
  );
  const [searchResults, setSearchResults] = React.useState(null);
  const [itemCount, setItemCount] = React.useState(sizeItemCount);
  const [key, setKey] = React.useState("");

  function handleChange(...args) {
    const [, , index] = args;
    const item = searchResults !== null ? searchResults[index] : defaultData[index];

    console.log("index>>>>>>>", index);
    console.log("id>>>>>>>", item.id);

    setSelectedMultiple(prev => {
      const nextSet = new Set(prev);
      if (nextSet.has(item.id)) {
        nextSet.delete(item.id);
        return nextSet;
      }

      nextSet.add(item.id);
      return nextSet;
    });
  }

  function handleAddedOption() {}

  function handleRemove() {}

  function handleFilter({ search }) {
    if (search === "") {
      setSearchResults(null);
      setItemCount(sizeItemCount);
    }

    // sample filter need improvements
    const result = defaultData.filter(item => {
      return item.label.includes(search.toLowerCase());
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
          const item = searchResults !== null ? searchResults[index] : defaultData[index];
          return selectedMultiple.has(item.id);
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
            <ListBox.Option {...props} label={`${props.index}`} key={defaultData[props.index].id}>
              {searchResults !== null
                ? `${searchResults[props.index].id}.${searchResults[props.index].label}`
                : `${defaultData[props.index].id}.${defaultData[props.index].label}`}
            </ListBox.Option>
          );
        }}
        itemCount={itemCount}
      />
    </ListBox>
  );
}
