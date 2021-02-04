import React from "react";
import * as characters from "../../fixtures/characters";
import ListBox from "../../../src";

function OptionCustomCheckbox(props) {
  return (
    <span>
      <input tabIndex="-1" type="checkbox" checked={props.isSelected} />
      {props.character}
    </span>
  );
}

export const CustomCheckboxes = () => (
  <ListBox isMulti>
    {characters.villians.map(Option => (
      <ListBox.Option label={Option.props.children} key={Option.props.children}>
        {({ isSelected }) => <OptionCustomCheckbox isSelected={isSelected} character={Option.props.children} />}
      </ListBox.Option>
    ))}
  </ListBox>
);
