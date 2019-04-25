import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Story, Rule } from "storybook/assets/styles/common.styles";
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
  const selectedIcon = select("icon", Object.keys(iconSelections), null);

  return (
    <Story>
      <h2>Showcase</h2>
      <p>
        <em>
          Use the <strong>knobs</strong> to tinker with the <strong>props</strong>.
        </em>
      </p>
      <Rule />
      <Button
        a11yText={text("a11yText", "")}
        icon={iconSelections[selectedIcon]}
        isActive={boolean("isActive", false)}
        isDisabled={boolean("isDisabled", false)}
        isDropdown={boolean("isDropdown", false)}
        isFullWidth={boolean("isFullWidth", false)}
        isPending={boolean("isPending", false)}
        isSemantic={boolean("isSemantic", true)}
        isSquare={boolean("isSquare", false)}
        isSubmit={boolean("isSubmit", false)}
        kind={select("type", ["default", "primary", "secondary", "flat", "destructive", "minor", "link"], "default")}
        onClick={clickHandler}
        size={select("size", ShirtSizes.DEFAULT, "medium")}
      >
        {text("label", "Take Action")}
      </Button>
    </Story>
  );
};

export default ExampleStory;
