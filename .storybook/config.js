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

require("../packages/RawButton/stories/RawButton.stories");
require("../packages/Button/stories/Button.stories");
require("../packages/L10n/stories/L10n.stories");
require("../packages/Collapsible/stories/Collapsible.stories");
require("../packages/Input/stories/Input.stories");

require("../packages/Popover/stories/Popover.stories");

// require("../packages/CollapsibleChecklists/stories/CollapsibleChecklists.stories");
// require("../packages/Confirmation/stories/Confirmation.stories");

// const req = require.context("../packages", true, /\.stories\.js$/);
// configure(() => {
//   req.keys().forEach(filename => req(filename));
// }, module);
