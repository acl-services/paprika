import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import Link from "../../src";

const getKnobs = () => ({
  isExternalLink: boolean("isExternalLink", false),
  hasNoUnderline: boolean("hasNoUnderline", false),
  isDark: boolean("isDark", false),
  isSubtle: boolean("isSubtle", false),
  isNavigation: boolean("isNavigation", false),
  children: text("label", "Link Example"),
  a11yText: text("a11yText", ""),
});

export default function Showcase() {
  return <Link {...getKnobs()} href="http://www.wegalvanize.com" />;
}
