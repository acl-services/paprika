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

configure(require.context("../packages/CollapsibleText", true, /CollapsibleText.stories.(js|mdx)$/), module);
configure(require.context("../packages/CollapsibleText", true, /CollapsibleText.Tests.stories.(js|mdx)$/), module);

const req = require.context("../packages", true, /\.stories\.js$/);
configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
