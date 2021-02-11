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
  const [isFixedOptionSelected, setIsFixedOptionSelected] = React.useState(false);

  const handleChange = (indexes, listBoxOptions) => {
    if (indexes.includes(0)) {
      // this only work because we know there is none other option or divider above this option
      setIsFixedOptionSelected(true);
    }

    const cloneArray = options.slice(0);
    indexes.forEach(index => {
      const i = options.findIndex(item => item.label === listBoxOptions[index].value);
      if (i >= 0) {
        cloneArray[i].isSelected = true;
      }
    });

    setOptions(cloneArray);
  };

  const handleFilter = filter => {
    if (filter.search) {
      setOptions([
        { id: 2, label: "Wonder Woman", isSelected: false },
        { id: 5, label: "Filtered item 1", isSelected: false },
        { id: 6, label: "Filtered item 2", isSelected: false },
      ]);
    } else {
      setOptions(initialOptions);
    }
  };

  return (
    <div className="App">
      <ListBox onChange={handleChange} isMulti>
        <ListBox.Filter filter={handleFilter} />
        <ListBox.Option value="Fixed option" isSelected={isFixedOptionSelected}>
          Fixed option
        </ListBox.Option>
        <ListBox.Divider />
        {options.map(o => (
          <ListBox.Option label={o.label} value={o.label} key={o.label} isSelected={o.isSelected}>
            {o.label}
          </ListBox.Option>
        ))}
      </ListBox>
    </div>
  );
};
export const FullyControlledListBox = () => {
  return <AppFullOptionControlled />;
};
