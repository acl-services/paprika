import React from "react";
import { select, color } from "@storybook/addon-knobs";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import Heading from "@paprika/heading";
import * as sc from "./AllIcons.styled";

const iconSizes = {
  small: stylers.spacer(2),
  medium: stylers.spacer(3),
  large: stylers.spacer(4),
};

export default () => {
  const iconProps = {
    size: select("size", iconSizes, stylers.spacer(3)),
    color: color("color", tokens.textColor.icon),
  };

  const req = require.context("../../src", false, /\.js$/);

  const cards = (
    <React.Fragment>
      {req.keys().map(filename => {
        const Component = req(filename).default;
        const componentName = filename.replace(/.\/|.js/g, "");

        return (
          <sc.Card key={componentName}>
            <Component {...iconProps} />
            <sc.Name>{componentName}</sc.Name>
          </sc.Card>
        );
      })}
    </React.Fragment>
  );

  return (
    <sc.IconsStory>
      <Heading level={2}>All Icons</Heading>
      <sc.Cards>{cards}</sc.Cards>
    </sc.IconsStory>
  );
};
