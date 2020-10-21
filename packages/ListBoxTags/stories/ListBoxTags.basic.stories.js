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
      <ListBoxTags onAddedOption={handleAddedOption} onChange={handleChange}>
        {data.map(option => {
          return (
            <ListBoxTags.Option
              value={option.id}
              isSelected={checkIfIsSelected(option.id)}
              key={option.id}
              label={option.label}
            >
              {option.label}
            </ListBoxTags.Option>
          );
        })}
      </ListBoxTags>
    </div>
  );
}

export const showcase = () => <App />;
