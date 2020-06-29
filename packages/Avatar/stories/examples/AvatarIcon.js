import React from "react";
import Icon from "@paprika/icon/lib/Add";
import { Story } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";
import Avatar from "../../src";

export default () => {
  return (
    <Story>
      <Avatar backgroundColor={tokens.color.blackLighten60} color={tokens.color.black}>
        <Icon />
      </Avatar>
    </Story>
  );
};
