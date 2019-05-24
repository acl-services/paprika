import React from "react";
import { storiesOf } from "@storybook/react";
import ListBox from "../..";

const options = ["Punisher", "Catwoman", "Venom", "Thunderbolts", "Deadpool", "Spawn", "Wolverine"];

storiesOf("ListBox / With Popover", module).add("Basic", () => (
  <ListBox>
    <ListBox.Popover zIndex={1} />
    {options.map(option => (
      <ListBox.Option>{option}</ListBox.Option>
    ))}
  </ListBox>
));
