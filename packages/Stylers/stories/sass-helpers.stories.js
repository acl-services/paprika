/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import React from "react";
import { storiesOf } from "@storybook/react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import { Box } from "./stylers.stories.styles";
import "./helpers.scss";

const storyName = getStoryName("Stylers");

storiesOf(`${storyName}/Sass`, module)
  .add("Mixins", () => (
    <Story className="story--stylers">
      <h1>Mixin Examples</h1>

      <h4>
        <code>@truncate-text</code>
      </h4>
      <Box className="truncated-box">
        Lorem ipsum hexagon street art paleo selfies locavore ethical single-origin vaporware mixtape.
      </Box>
      <h4>
        <code>@no-truncate-text</code>
      </h4>
      <Box className="truncated-box untruncated-box">
        Lorem ipsum hexagon street art paleo selfies locavore ethical single-origin vaporware mixtape.
      </Box>

      <Rule />

      <h4>
        <code>@is-visually-hidden</code>
      </h4>
      <Box className="invisible-box">
        <span role="img" aria-label="ghost">
          👻
        </span>
      </Box>

      <Rule />

      <h4>
        <code>@placeholders</code>
      </h4>
      <Box>
        <input placeholder="placeholder" />
        <br />
        <input placeholder="placeholder" disabled />
      </Box>

      <Rule />

      <h3>Focus Indicators</h3>
      <h4>
        <code>@focus-ring()</code>
      </h4>
      <div className="focus-box focus-box--default" tabIndex={0} />
      <h4>
        <code>@focus-ring(true)</code>
      </h4>
      <div className="focus-box focus-box--inset" tabIndex={0} />
      <h4>
        <code>@focus-ring--bordered()</code>
      </h4>
      <div className="focus-box focus-box--bordered" tabIndex={0} />
      <h4>
        <code>@focus-ring--bordered(true)</code>
      </h4>
      <div className="focus-box focus-box--bordered--inset" tabIndex={0} />
      <h4>
        <code>@focus-ring--subtle()</code>
      </h4>
      <div className="focus-box focus-box--subtle" tabIndex={0} />
      <h4>
        <code>@focus-ring--subtle(true)</code>
      </h4>
      <div className="focus-box focus-box--subtle--inset" tabIndex={0} />
    </Story>
  ))

  .add("Functions", () => (
    <Story className="story--stylers">
      <h1>Function Examples</h1>

      <h4>
        <code>font-scale()</code>
      </h4>
      <div className="font-scale">
        <span className="font-scale--5">
          <span>-5</span>
          <span>9px</span>
        </span>
        <span className="font-scale--4">
          <span>-4</span>
          <span>10px</span>
        </span>
        <span className="font-scale--3">
          <span>-3</span>
          <span>11px</span>
        </span>
        <span className="font-scale--2">
          <span>-2</span>
          <span>13px</span>
        </span>
        <span className="font-scale--1">
          <span>-1</span>
          <span>14px</span>
        </span>
        <span className="font-scale-0">
          <span>0</span>
          <span>16px</span>
        </span>
        <span className="font-scale-1">
          <span>1</span>
          <span>18px</span>
        </span>
        <span className="font-scale-2">
          <span>2</span>
          <span>20px</span>
        </span>
        <span className="font-scale-3">
          <span>3</span>
          <span>23px</span>
        </span>
        <span className="font-scale-4">
          <span>4</span>
          <span>26px</span>
        </span>
        <span className="font-scale-5">
          <span>5</span>
          <span>29px</span>
        </span>
        <span className="font-scale-6">
          <span>6</span>
          <span>32px</span>
        </span>
        <span className="font-scale-7">
          <span>7</span>
          <span>36px</span>
        </span>
      </div>

      <Rule />

      <h4>
        <code>line-height-scale()</code>
      </h4>
      <Box className="line-height--3">
        <code>line-height(-3) === 0.98</code>
        <br /> Hexagon street art selfies locavore ethical mixtape.
      </Box>
      <Box className="line-height--2">
        <code>line-height(-2) === 1.11</code>
        <br /> Hexagon street art selfies locavore ethical mixtape.
      </Box>
      <Box className="line-height--1">
        <code>line-height(-1) === 1.24</code>
        <br /> Hexagon street art selfies locavore ethical mixtape.
      </Box>
      <Box className="line-height-0">
        <code>line-height() === 1.4</code>
        <br /> Hexagon street art selfies locavore ethical mixtape.
      </Box>
      <Box className="line-height-1">
        <code>line-height(1) === 1.58</code>
        <br /> Hexagon street art selfies locavore ethical mixtape.
      </Box>
      <Box className="line-height-2">
        <code>line-height(2) === 1.77</code>
        <br /> Hexagon street art selfies locavore ethical mixtape.
      </Box>
      <Box className="line-height-3">
        <code>line-height(3) === 1.99</code>
        <br /> Hexagon street art selfies locavore ethical mixtape.
      </Box>

      <Rule />

      <h4>
        <code>z()</code>
      </h4>
      <Box className="z">
        {[...Array(8).keys()].map(index => (
          <span key={index}>{index}</span>
        ))}
      </Box>
    </Story>
  ));
