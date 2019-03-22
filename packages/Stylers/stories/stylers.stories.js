import React from "react";
import { storiesOf } from "@storybook/react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import "./helpers.scss";

const Box = styled.div`
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  margin-bottom: ${stylers.spacer(2)};
  padding: ${stylers.spacer(2)};
  width: 280px;
`;

const TruncatedBox = styled(Box)`
  ${stylers.truncateText};
`;

const UntruncatedBox = styled(TruncatedBox)`
  ${stylers.noTruncateText};
`;

const InvisibleBox = styled(Box)`
  ${stylers.visuallyHidden};
`;

const InputWithPlaceholder = styled.input`
  ${stylers.placeholders};
`;

storiesOf("Stylers", module)
  .add("Include Helpers", () => (
    <Story>
      <h1>Include Helpers</h1>
      <h4>
        <code>stylers.truncateText</code>
      </h4>
      <TruncatedBox>Lorem ipsum tumeric direct trade snackwave locavore taxidermy live-edge wolf mixtape.</TruncatedBox>

      <h4>
        <code>stylers.noTruncateText</code>
      </h4>
      <UntruncatedBox>
        Lorem ipsum tumeric direct trade snackwave locavore taxidermy live-edge wolf mixtape.
      </UntruncatedBox>

      <h4>
        <code>stylers.visuallyHidden</code>
      </h4>
      <InvisibleBox>
        <span role="img" aria-label="ghost">
          👻
        </span>
      </InvisibleBox>

      <h4>
        <code>stylers.placeholders</code>
      </h4>
      <Box>
        <InputWithPlaceholder placeholder="placeholder" />
        <br />
        <InputWithPlaceholder placeholder="placeholder" disabled />
      </Box>
    </Story>
  ))

  // Sassy Helpers

  .add("Sass Mixins", () => (
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
      <h4>
        <code>@is-visually-hidden</code>
      </h4>
      <Box className="invisible-box">
        <span role="img" aria-label="ghost">
          👻
        </span>
      </Box>
      <h4>
        <code>@placeholders</code>
      </h4>
      <Box>
        <input placeholder="placeholder" />
        <br />
        <input placeholder="placeholder" disabled />
      </Box>
    </Story>
  ))

  .add("Sass Functions", () => (
    <Story className="story--stylers">
      <h1>Function Examples</h1>
      <h4>
        <code>font-scale()</code>
      </h4>
      <p className="font-scale">
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
      </p>
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
