import React from "react";
import { select, text, boolean } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import * as types from "../../src/types";
import Spinner from "../../src";

const spinnerProps = () => ({
  size: select("size", [types.SMALL, types.MEDIUM, types.LARGE], "medium"),
  caption: text("caption", "Spinning..."),
  a11yText: text("a11yText", ""),
  isDark: boolean("isDark", false),
});

const isDarkStyles = {
  backgroundColor: "#d7d7d7",
  width: "200px",
  paddingTop: "5px",
};

const ExampleStory = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Spinner Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <Spinner {...props} style={props.isDark ? isDarkStyles : null} />
  </Story>
);

export default () => <ExampleStory {...spinnerProps()} />;
