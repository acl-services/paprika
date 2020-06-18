import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes, InputValidTypes } from "@paprika/helpers/lib/enums";
import SearchIcon from "@paprika/icon/lib/Search";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import Heading from "@paprika/heading";
import CodeViewer from "storybook/components/CodeViewer";
import Input from "../../src";

const iconSelections = {
  none: null,
  search: <SearchIcon />,
  info: <InfoIcon />,
};

const getKnobs = () => ({
  size: select("size", ShirtSizes.DEFAULT, "medium"),
  placeholder: text("placeholder", "Enter some text"),
  icon: iconSelections[select("icon", Object.keys(iconSelections), null)],
  hasClearButton: boolean("hasClearButton", false),
  isDisabled: boolean("isDisabled", false),
  isReadOnly: boolean("isReadOnly", false),
  hasError: boolean("hasError", false),
  type: select("type", InputValidTypes.ALL),
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
        <Input {...inputProps} />
      </CodeViewer>
    </Story>
  );
};

export default ({ onChange, onClear, value }) => (
  <ExampleStory onChange={onChange} onClear={onClear} value={value} {...getKnobs()} />
);
