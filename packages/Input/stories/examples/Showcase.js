import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import SearchIcon from "@paprika/icon/lib/Search";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import Heading from "@paprika/heading";
import CodeViewer from "storybook/components/CodeViewer";
import * as types from "../../src/types";
import InputExample from "./InputExample";

const iconSelections = {
  none: null,
  search: <SearchIcon />,
  info: <InfoIcon />,
};

const getKnobs = () => ({
  size: select("size", [types.SMALL, types.MEDIUM, types.LARGE], "medium"),
  placeholder: text("placeholder", "Enter some text"),
  icon: iconSelections[select("icon", Object.keys(iconSelections), null)],
  hasClearButton: boolean("hasClearButton", false),
  isDisabled: boolean("isDisabled", false),
  isReadOnly: boolean("isReadOnly", false),
  hasError: boolean("hasError", false),
  type: select("type", types.inputValidTypes),
  a11yText: text("a11yText", null),
});

const ExampleStory = props => {
  const { ...inputProps } = props;

  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />
      <CodeViewer>
        <InputExample {...inputProps} />
      </CodeViewer>
    </Story>
  );
};

export default ({ onChange, onClear, value }) => (
  <ExampleStory onChange={onChange} onClear={onClear} value={value} {...getKnobs()} />
);
