import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import SearchIcon from "@paprika/icon/lib/Search";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import Heading from "../../../Heading/src";
import { InputStory } from "../Input.stories.styles";
import InputExample from "./InputExample";

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
