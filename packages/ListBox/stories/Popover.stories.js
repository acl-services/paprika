import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import ListBox from "../src";

const storyName = getStoryName("ListBox");
const options = ["Punisher", "Catwoman", "Venom", "Thunderbolts", "Deadpool", "Spawn", "Wolverine"];

storiesOf(`${storyName}/Subcomponents/Popover`, module).add("Basic Popover with zindex", () => (
  <ListBox>
    <ListBox.Popover zIndex={1} />
    {options.map(option => (
      <ListBox.Option>{option}</ListBox.Option>
    ))}
  </ListBox>
));
