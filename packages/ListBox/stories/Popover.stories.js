import React from "react";
import { storiesOf } from "@storybook/react";
import ListBox from "../src";

const options = ["Punisher", "Catwoman", "Venom", "Thunderbolts", "Deadpool", "Spawn", "Wolverine"];

storiesOf("ListBox / ListBox.Popover", module).add("Basic Popover with zindex", () => (
  <ListBox>
    <ListBox.Popover zIndex={1} />
    {options.map(option => (
      <ListBox.Option>{option}</ListBox.Option>
    ))}
  </ListBox>
));
