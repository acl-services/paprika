import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import Link from "../../src";

const getKnobs = () => ({
  size: select("size", Object.values(Link.types.size), Link.types.size.MEDIUM),
  isExternalLink: boolean("isExternalLink", false),
  hasNoUnderline: boolean("hasNoUnderline", false),
  isBlack: boolean("isBlack", false),
  isNavigation: boolean("isNavigation", false),
  href: text("href", "http://www.wegalvanize.com"),
  children: text("label", "Link Example"),
  a11yText: text("a11yText", ""),
});

export default function Showcase() {
  return <Link {...getKnobs()} />;
}
