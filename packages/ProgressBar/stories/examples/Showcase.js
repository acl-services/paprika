import React from "react";
import { text, number, boolean, select } from "@storybook/addon-knobs";
import ProgressBar from "../../src";

const progressBarProps = () => ({
  completed: number("completed", "20"),
  isCompact: boolean("isCompact", false),
  header: text("header", "Preparing your file..."),
  headerLevel: select("headerLevel", [1, 2, 3, 4, 5, 6], 3),
  bodyText: text("bodyText", ""),
  a11yText: text("a11yText", ""),
});

const ExampleStory = props => <ProgressBar {...props} />;

export default () => <ExampleStory {...progressBarProps()} />;
