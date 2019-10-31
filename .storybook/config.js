import React from "react";
import ReactDOM from "react-dom";
import { addParameters, addDecorator, configure } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import paprikaTheme from "./paprikaTheme";
import "./reset.scss";

addParameters({
  options: {
    theme: paprikaTheme,
    showPanel: true,
    panelPosition: "right",
  },
});

addDecorator(withA11y);

require("./welcome.story");
require("../packages/CollapsibleText/stories/CollapsibleText.stories");
// require("../packages/CollapsibleText/stories/CollapsibleText.mdx");
//
// const req = require.context("../packages", true, /\.stories\.(js|mdx)$/);
// configure(() => {
//   req.keys().forEach(filename => req(filename));
// }, module);
