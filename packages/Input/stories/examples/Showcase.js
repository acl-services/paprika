import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import SearchIcon from "@paprika/icon/lib/Search";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import CodeViewer from "storybook/components/CodeViewer";
import Input from "../../src";

const iconSelections = {
  none: null,
  search: <SearchIcon />,
  info: <InfoIcon />,
};

const getKnobs = () => ({
  size: select("size", Object.values(Input.types.size), Input.types.size.MEDIUM),
  placeholder: text("placeholder", "Enter some text"),
  icon: iconSelections[select("icon", Object.keys(iconSelections), null)],
  hasClearButton: boolean("hasClearButton", false),
  isDisabled: boolean("isDisabled", false),
  isReadOnly: boolean("isReadOnly", false),
  hasError: boolean("hasError", false),
  type: select("type", Object.values(Input.types.type)),
  a11yText: text("a11yText", null),
});

export default function Showcase() {
  return (
    <CodeViewer>
      <Input {...getKnobs()} />
    </CodeViewer>
  );
}
