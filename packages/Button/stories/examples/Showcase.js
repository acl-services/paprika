import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import AddIcon from "@paprika/icon/Add";
import TimesIcon from "@paprika/icon/Times";
import InfoIcon from "@paprika/icon/InfoCircle";
import { ShirtSizes } from "../../../helpers/customPropTypes";
import Button from "../..";

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
