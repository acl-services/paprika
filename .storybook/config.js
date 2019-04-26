import React from "react";
import ReactDOM from "react-dom";
import { configure, setAddon } from "@storybook/react";
import axeConfig from "./axeConfig";

import "./reset.scss";

const axe = require("react-axe");
axe(React, ReactDOM, 10000, axeConfig);

require("./welcome.story");

const req = require.context("../packages", true, /\.stories\.js$/);
configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
