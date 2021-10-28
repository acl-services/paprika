import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import CodeViewer from "storybook/components/CodeViewer";
import Link from "../../src";

const getKnobs = () => ({
  isExternalLink: boolean("isExternalLink", false),
  hasNoUnderline: boolean("hasNoUnderline", false),
  hasTruncation: boolean("hasTruncation", false),
  isSubtle: boolean("isSubtle", false),
  isDark: boolean("isDark", false),
  isMenu: boolean("isMenu", false),
  children: text("label", "Paprika Link Example"),
  a11yText: text("a11yText", ""),
  maxWidth: text("maxWidth", "120"),
});

export default function Showcase() {
  return (
    <CodeViewer>
      <Link {...getKnobs()} href="http://www.wegalvanize.com" />
    </CodeViewer>
  );
}
