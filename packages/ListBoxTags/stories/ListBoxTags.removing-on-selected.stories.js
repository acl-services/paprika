import React from "react";
import { getStoryName } from "storybook/storyTree";
import ListBoxTags from "../src";

const storyName = getStoryName("ListBoxTags");

export default {
  title: storyName,
};

function App() {
  const [data, setData] = React.useState([
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

  function handleChange(option, options, selectedOption) {
    setIsSelected(prev => {
      const prevClone = prev.slice(0);
      const id = options[selectedOption].value;
      if (prev.includes(id)) {
        prev.splice(prevClone.indexOf(id), 1);
        return prev;
      }

      return [...new Set(prevClone.concat([id]))];
    });
  }

  function handleRemove(option) {
    // data.findIndex(d => d.id === option.id) if you don't need to support IE11
    const index = isSelected.indexOf(option.id);
    if (index >= 0) {
      setIsSelected(prev => {
        const clone = prev.slice(0);
        clone.splice(index, 1);
        return clone;
      });
    }
  }

  function handleAddedOption(label) {
    const option = { id: label, label, isCustom: true };
    setData(prev => {
      return prev.concat(option);
    });

    setIsSelected(prev => {
      return prev.concat(option.id);
    });
  }

  return (
    <div style={{ padding: "32px" }}>
      <ListBoxTags
        noResultsMessage="No results found, but you can add an email and then press enter..."
        onChange={handleChange}
        onCustomOption={handleAddedOption}
        onRemove={handleRemove}
        selectedOptions={isSelected.length ? data.filter(item => isSelected.includes(item.id)) : []}
      >
        {data.map(option => {
          if (typeof option.isCustom !== "undefined") {
            return null;
          }

          return !checkIfIsSelected(option.id) ? (
            <ListBoxTags.Option value={option.id} key={option.id} label={option.label}>
              {option.label}
            </ListBoxTags.Option>
          ) : null;
        })}
      </ListBoxTags>
    </div>
  );
}

export const removingOnSelection = () => <App />;
