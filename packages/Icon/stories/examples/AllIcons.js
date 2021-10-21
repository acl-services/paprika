import React from "react";
import { select, color } from "@storybook/addon-knobs";
import tokens from "@paprika/tokens";
import Heading from "@paprika/heading";
import * as sc from "./AllIcons.styled";

const iconSizes = {
  default: undefined,
  medium: tokens.icon.sizeMd,
  large: tokens.icon.sizeLg,
  ExtraLarge: tokens.icon.sizeXlg,
};

export default () => {
  const iconProps = {
    size: select("size", iconSizes),
    color: color("color", tokens.textColor.icon),
  };

  const req = require.context("../../src", false, /\.js$/);

  const cards = (
    <>
      {req.keys().map(filename => {
        if (filename === "./index.js") return null;

        const Component = req(filename).default;
        const componentName = filename.replace(/.\/|.js/g, "");
        return (
          <sc.Card key={componentName}>
            <Component {...iconProps} />
            <sc.Name>{componentName}</sc.Name>
          </sc.Card>
        );
      })}
    </>
  );

  return (
    <>
      <Heading level={2}>All Icons</Heading>
      <sc.Cards>{cards}</sc.Cards>
    </>
  );
};
