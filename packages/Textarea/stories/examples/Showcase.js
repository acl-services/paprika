import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { boolean, select, text } from "@storybook/addon-knobs";
import TextareaExample from "./TextareaExample";

const ShowcaseStory = () => {
  const textareaProps = {
    a11yText: text("a11yText"),
    canExpand: boolean("canExpand", true),
    hasError: boolean("hasError", false),
    isDisabled: boolean("isDisabled", false),
    isReadOnly: boolean("isReadOnly", false),
    maxHeight: text("maxHeight"),
    placeholder: text("placeholder", "This is a default placeholder..."),
    size: select("size", ["small", "medium", "large"], "medium"),
  };

  return (
    <Story>
      <TextareaExample {...textareaProps} />
    </Story>
  );
};

export default ShowcaseStory;
