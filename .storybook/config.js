import React from "react";
import ReactDOM from "react-dom";
import { addParameters, addDecorator, configure } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withCssResources } from "@storybook/addon-cssresources";
import paprikaTheme from "./paprikaTheme";
import "./reset.scss";

addParameters({
  options: {
    theme: paprikaTheme,
    showPanel: true,
    panelPosition: "right",
  },
  previewTabs: {
    canvas: { hidden: true },
  },
  cssresources: [
    {
      id: "Lato",
      code: `<style>body { font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif; }</style>`,
      picked: true,
      hideCode: true,
    },
    {
      id: "IBM Plex",
      code: `<style>body { font-family: "IBM Plex Sans", "Helvetica Neue", Helvetica, Arial, sans-serif; }</style>`,
      picked: false,
      hideCode: true,
    },
  ],
});

addDecorator(withA11y);
addDecorator(withCssResources);

const stories = [
  // Welcome
  require.context("./", false, /welcome.story.js/),

  // CodeViewer
  require.context("./components/CodeViewer", false, /CodeViewer.story.js/),

  // CollapsibleText
  require.context("../packages/CollapsibleText", true, /CollapsibleText.stories.(js|mdx)$/),
  require.context("../packages/CollapsibleText", true, /CollapsibleText.Tests.stories.js$/),

  // DialogActions
  require.context("../packages/DialogActions", true, /DialogActions.stories.(js|mdx)$/),
  require.context("../packages/DialogActions", true, /DialogActions.Tests.stories.js$/),

  // Toast
  require.context("../packages/Toast", true, /Toast.stories.(js|mdx)$/),
  require.context("../packages/Toast", true, /Toast.examples.stories.(js|mdx)$/),
  require.context("../packages/Toast", true, /Toast.backyard.stories.(js|mdx)$/),
  require.context("../packages/Toast", true, /Toast.Tests.stories.(js|mdx)$/),

  // SidePanel
  require.context("../packages/SidePanel", true, /SidePanel.stories.(js|mdx)$/),
  require.context("../packages/SidePanel", true, /SidePanel.examples.stories.(js|mdx)$/),
  require.context("../packages/SidePanel", true, /SidePanel.Tests.stories.js$/),

  // Remaining
  require.context("../packages", true, /\.stories\.js$/),
];

configure(stories, module);
