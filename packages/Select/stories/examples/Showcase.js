import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import CodeViewer from "storybook/components/CodeViewer";
import { SelectStory } from "../Select.stories.styles";
import Select from "../../src";

function renderChildren() {
  const options = ["Pepsi", "Coke", "Canada Dry"];
  return options.map(optionLabel => (
    <option key={optionLabel} value={optionLabel}>
      {optionLabel}
    </option>
  ));
}

const getKnobs = () => ({
  size: select("size", Object.values(Select.types.size), Select.types.size.MEDIUM),
  placeholder: text("placeholder", "This is a custom placeholder..."),
  isDisabled: boolean("isDisabled", false),
  isReadOnly: boolean("isReadOnly", false),
  hasError: boolean("hasError", false),
  a11yText: text("a11yText"),
});

export default function Showcase() {
  return (
    <SelectStory storyName="Select" tagline={SelectStory.defaultTaglines.showcase}>
      <CodeViewer>
        <Select {...getKnobs()}>{renderChildren()}</Select>
      </CodeViewer>
    </SelectStory>
  );
}
