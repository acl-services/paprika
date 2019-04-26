import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";

import SearchIcon from "@paprika/icon/Search";
import InfoIcon from "@paprika/icon/InfoCircle";
import Heading from "@paprika/heading";

import { ShirtSizes } from "../../../helpers/customPropTypes";

import InputExample from "./InputExample";
import { InputStory } from "../Input.stories.styles";

const iconSelections = {
  none: null,
  search: <SearchIcon />,
  info: <InfoIcon />,
};

const ExampleStory = () => {
  const sizeKnob = select("size", ShirtSizes.DEFAULT, "medium");

  return (
    <InputStory>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />

      <InputExample
        a11yText={text("a11yText", "")}
        hasClearButton={boolean("hasClearButton", false)}
        hasError={boolean("hasError", false)}
        icon={iconSelections[select("icon", Object.keys(iconSelections), null)]}
        isDisabled={boolean("isDisabled", false)}
        isReadOnly={boolean("isReadOnly", false)}
        placeholder={text("placeholder", "Enter some text")}
        size={sizeKnob}
        type={select("type", ["password", "text"], "text")}
      />
    </InputStory>
  );
};

export default ExampleStory;
