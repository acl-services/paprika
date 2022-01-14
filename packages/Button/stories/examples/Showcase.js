import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import AddIcon from "@paprika/icon/lib/Add";
import TimesIcon from "@paprika/icon/lib/Times";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
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

const getKnobs = () => ({
  children: text("label", "Give now"),
  size: select("size", Object.values(Button.types.size), Button.types.size.MEDIUM),
  kind: select("type", Object.values(Button.types.kind), Button.types.kind.DEFAULT),
  onClick: clickHandler,
  icon: iconSelections[select("icon", Object.keys(iconSelections), null)],
  isActive: boolean("isActive", false),
  isDisabled: boolean("isDisabled", false),
  isDropdown: boolean("isDropdown", false),
  isFullWidth: boolean("isFullWidth", false),
  isPending: boolean("isPending", false),
  isSubmit: boolean("isSubmit", false),
  isSemantic: boolean("isSemantic", true),
  a11yText: text("a11yText", ""),
});

export default function Showcase() {
  return <Button {...getKnobs()} />;
}
