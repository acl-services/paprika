import React from "react";
import ReactDOM from "react-dom";
import { configure, setAddon } from "@storybook/react";
import axeConfig from "./axeConfig";

import "./reset.scss";
import "./assets/css/storybook.scss";

const axe = require("react-axe");
axe(React, ReactDOM, 10000, axeConfig);

const req = require.context("../packages", true, /\.stories\.js$/);
configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
