import React from "react";
import ReactDOM from "react-dom";
import { addParameters, configure } from "@storybook/react";
import paprikaTheme from "./paprikaTheme";
import axeConfig from "./axeConfig";

import "./reset.scss";

addParameters({
  options: {
    theme: paprikaTheme,
    showPanel: true,
    panelPosition: "right",
  },
});

const axe = require("react-axe");
axe(React, ReactDOM, 10000, axeConfig);

require("./welcome.story");

const req = require.context("../packages", true, /\.stories\.js$/);
configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
