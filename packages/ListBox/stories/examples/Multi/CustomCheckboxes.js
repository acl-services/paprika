import React from "react";
import * as characters from "../../fixtures/characters";
import ListBox from "../../../src";

export const CustomCheckboxes = () => (
  <ListBox isMulti>
    {characters.villians.map(Option => (
      <ListBox.Option label={Option.props.children} key={Option.props.children}>
        {Option.props.children}
      </ListBox.Option>
    ))}
  </ListBox>
);
