import React from "react";
import Checkbox from "@paprika/checkbox";
import * as characters from "../../fixtures/characters";
import ListBox from "../../../src";

export const CustomCheckboxes = () => {
  const { CHECKED, UNCHECKED } = Checkbox.types.state;

  const [checkedState, setCheckedState] = React.useState(UNCHECKED);

  const handleChange = () => setCheckedState(checkedState === CHECKED ? UNCHECKED : CHECKED);

  return (
    <ListBox isMulti>
      {characters.villians.map(Option => (
        <ListBox.Option label={Option.props.children} key={Option.props.children}>
          {({ isSelected }) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checkedState={isSelected ? CHECKED : checkedState}
                onChange={handleChange}
                style={{ paddingRight: "8px" }}
              />
              {Option.props.children}
            </div>
          )}
        </ListBox.Option>
      ))}
    </ListBox>
  );
};
