import React from "react";
import ReactDOM from "react-dom";
import { addParameters, configure, addDecorator } from "@storybook/react";
import paprikaTheme from "./paprikaTheme";
import axeConfig from "./axeConfig";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);

import "./reset.scss";

addParameters({
  options: {
    theme: paprikaTheme,
  },
});

// const axe = require("react-axe");
// axe(React, ReactDOM, 10000, axeConfig);

const meFirst = ["/Button/", "/RawButton/", "/Popover/", "/Stylers/"];

const req = require.context("../packages", true, /\.stories\.js$/);
const stack = req.keys();

const ordered = meFirst.flatMap(comp => stack.filter(filename => filename.match(comp)));
const rest = stack.filter(filename => !ordered.includes(filename));

require("./welcome.story");
configure(() => {
  ordered.forEach(filename => req(filename));
  rest.forEach(filename => req(filename));
}, module);
