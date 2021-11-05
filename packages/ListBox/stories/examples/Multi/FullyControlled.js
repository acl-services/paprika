import React from "react";
import ListBox from "../../../src";

const initialOptions = [
  { id: 1, label: "Black Panther", isSelected: false },
  { id: 2, label: "Wonder Woman", isSelected: false },
  { id: 3, label: "Spiderman", isSelected: false },
  { id: 4, label: "The Incredibles", isSelected: false },
];

const AppFullOptionControlled = () => {
  const [options, setOptions] = React.useState(initialOptions);

  const handleChange = (indexes, listBoxOptions) => {
    const cloneArray = options.slice(0);
    indexes.forEach(index => {
      const i = options.findIndex(item => item.label === listBoxOptions[index].value);
      if (i >= 0) {
        cloneArray[i].isSelected = true;
      }
    });

    setOptions(cloneArray);
  };

  return (
    <div className="App">
      <ListBox onChange={handleChange} isMulti>
        <ListBox.Filter />
        {options.map(o => (
          <ListBox.Option label={o.label} value={o.label} key={o.label} isSelected={o.isSelected}>
            {o.label}
          </ListBox.Option>
        ))}
      </ListBox>
    </div>
  );
};
export const FullyControlledListBox = () => <AppFullOptionControlled />;
