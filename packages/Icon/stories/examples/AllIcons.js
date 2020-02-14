import React from "react";
import Heading from "@paprika/heading";
import stylers from "@paprika/stylers";

import * as sc from "./AllIcons.styled";

export default function AllIcons() {
  const req = require.context("../../src", false, /\.js$/);
  const cards = (
    <React.Fragment>
      {req.keys().map(filename => {
        const Component = req(filename).default;
        const componentName = filename.replace(/.\/|.js/g, "");
        return (
          <sc.Card key={componentName}>
            <Component size={stylers.spacer(4)} />
            <span>{componentName}</span>
          </sc.Card>
        );
      })}
    </React.Fragment>
  );

  return (
    <sc.IconsStory>
      <Heading level={2}>All icons</Heading>
      <sc.Cards>{cards}</sc.Cards>
    </sc.IconsStory>
  );
}
