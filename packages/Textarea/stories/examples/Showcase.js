import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import Textarea from "../../Textarea";

const ShowcaseStory = () => {
  const textareaProps = {
    a11yText: text("a11yText"),
    canExpand: boolean("canExpand", true),
    isDisabled: boolean("isDisabled", false),
    isReadOnly: boolean("isReadOnly", false),
    maxHeight: text("maxHeight"),
    placeholder: text("placeholder", "This is a default placeholder..."),
    resizeTimeout: number("resizeTimeout", 66),
    size: select("size", ["small", "medium", "large"], "medium"),
    value: text("value"),
  };

  return (
    <Story>
      <Textarea {...textareaProps} />
    </Story>
  );
};

export default ShowcaseStory;
