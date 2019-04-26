import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { boolean, select, text } from "@storybook/addon-knobs";
import Heading from "../../src";

const ShowcaseStory = () => {
  const content = text("content", "Authentic Heading Succulents");
  const headingProps = {
    ariaText: text("ariaText"),
    displayLevel: parseInt(select("displayLevel", ["1", "2", "3", "4", "5", "6"], "1"), 10),
    hasDivider: boolean("hasDivider", false),
    hasUnderline: boolean("hasUnderline", false),
    isHidden: boolean("isHidden", false),
    isLight: boolean("isLight", false),
    isSemantic: boolean("isSemantic", true),
    level: parseInt(select("level", ["1", "2", "3", "4", "5", "6"], "1"), 10),
  };

  return (
    <Story>
      <Heading {...headingProps}>{content}</Heading>
    </Story>
  );
};

export default ShowcaseStory;
