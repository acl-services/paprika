import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import CodeViewer from "storybook/components/CodeViewer";
import Textarea from "../../src";

const getKnobs = () => ({
  size: select("size", Object.values(Textarea.types.size), Textarea.types.size.MEDIUM),
  canExpand: boolean("canExpand", true),
  maxHeight: text("maxHeight", 300),
  minHeight: text("minHeight", 80),
  hasError: boolean("hasError", false),
  isDisabled: boolean("isDisabled", false),
  isReadOnly: boolean("isReadOnly", false),
  placeholder: text("placeholder", ""),
  a11yText: text("a11yText"),
});

export default function Showcase() {
  return (
    <CodeViewer>
      <Textarea {...getKnobs()} />
    </CodeViewer>
  );
}
