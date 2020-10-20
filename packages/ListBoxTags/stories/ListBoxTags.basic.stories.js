import ListBox from "@paprika/listbox";
import React from "react";
import { getStoryName } from "storybook/storyTree";
import ListBoxTags, { ListBoxTags2 } from "../src";

const storyName = getStoryName("ListBoxTags");

export default {
  title: storyName,
};

function App() {
  const [data] = React.useState([
    { id: 0, label: "First Tier", isDivider: true },
    { id: 1, label: "Wayne Gretzky" },
    { id: 2, label: "Mike Gartner" },
    { id: 3, label: "Bernie Geoffrion" },
    { id: 4, label: "Glenn Hall" },
    { id: 5, label: "Dominik Hasek" },
    { id: 0, label: "SecondTier", isDivider: true },
    { id: 6, label: "Tim Horton" },
    { id: 7, label: "Bobby Hull" },
    { id: 8, label: "Brett Hull" },
    { id: 9, label: "Red Kelly" },
    { id: 10, label: "Ted Kennedy" },
    { id: 11, label: "Duncan Keith" },
  ]);

  const [filteredData, setFilteredData] = React.useState(data);
  const [selectedOptions, setSelectedOptions] = React.useState([1, 3]);

  function handleChangeFilter(value) {
    if (value === "") {
      return setFilteredData(data);
    }
    setFilteredData(ListBoxTags.filter(value, data));
  }

  function handleChange(selected, options, optionSelected) {
    /**
     * By default the ListBox returns selected and options as uncontrolled component, but has a third parameter which returns the recent selected option
     * for this component that's the option you want to use since we want to use it as controlled component.
     */
    console.log(optionSelected);
  }

  function handleIsOptionSelected(index, option) {
    return selectedOptions.includes(option.id);
  }

  return (
    <ListBoxTags
      isOptionSelected={handleIsOptionSelected}
      data={filteredData}
      onChange={handleChange}
      onChangeFilter={handleChangeFilter}
    />
  );
}

function App2() {
  const [data] = React.useState([
    { id: 1, label: "Wayne Gretzky" },
    { id: 2, label: "Mike Gartner" },
    { id: 3, label: "Bernie Geoffrion" },
    { id: 4, label: "Glenn Hall" },
    { id: 5, label: "Dominik Hasek" },
    { id: 6, label: "Tim Horton" },
    { id: 7, label: "Bobby Hull" },
    { id: 8, label: "Brett Hull" },
    { id: 9, label: "Red Kelly" },
    { id: 10, label: "Ted Kennedy" },
    { id: 11, label: "Duncan Keith" },
  ]);

  const [isSelected, setIsSelected] = React.useState([1, 3]);

  function checkIfIsSelected(id) {
    return isSelected.includes(id);
  }

  return (
    <div style={{ padding: "32px" }}>
      <ListBoxTags2 size={ListBox.types.size.LARGE}>
        {data.map(option => {
          return (
            <ListBox.Option isSelected={checkIfIsSelected(option.id)} key={option.id} label={option.label}>
              {option.label}
            </ListBox.Option>
          );
        })}
      </ListBoxTags2>
    </div>
  );
}

export const showcase = () => <App />;
export const showcase2 = () => <App2 />;
