import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "helpers/src/customPropTypes";
import AddIcon from "packages/Icon/src/Add";
import TimesIcon from "packages/Icon/src/Times";
import InfoIcon from "packages/Icon/src/InfoCircle";
import Heading from "packages/Heading/src";
import Button from "../../src";

function clickHandler() {
  action("Clicked a button")();
}

const iconSelections = {
  none: null,
  add: <AddIcon />,
  times: <TimesIcon />,
  info: <InfoIcon />,
};

const ExampleStory = () => {
  const labelKnob = text("label", "Take Action");
  const sizeKnob = select("size", ShirtSizes.DEFAULT, "medium");
  const kindKnob = select(
    "type",
    ["default", "primary", "secondary", "flat", "destructive", "minor", "link"],
    "default"
  );
  const iconKnob = select("icon", Object.keys(iconSelections), null);

  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />
      <Button
        a11yText={text("a11yText", "")}
        icon={iconSelections[iconKnob]}
        isActive={boolean("isActive", false)}
        isDisabled={boolean("isDisabled", false)}
        isDropdown={boolean("isDropdown", false)}
        isFullWidth={boolean("isFullWidth", false)}
        isPending={boolean("isPending", false)}
        isSemantic={boolean("isSemantic", true)}
        isSubmit={boolean("isSubmit", false)}
        kind={kindKnob}
        onClick={clickHandler}
        size={sizeKnob}
      >
        {labelKnob}
      </Button>
    </Story>
  );
};

export default ExampleStory;
