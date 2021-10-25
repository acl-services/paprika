import React from "react";
import { ThemeProvider, css } from "styled-components";
import { Gap, CodeHeading } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import Button from "../../src";
import * as types from "../../src/types";

const coloredButtonStyles = css`
  color: #ffffff;
  text-decoration: none;
  text-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
`;

const focusBorderStyles = css`
  border-color: #276cf5;
  box-shadow: 0 0 0 2px #99cbfc;
`;

const starlingKindStyles = {
  [types.DEFAULT]: css`
    background-color: #ffffff;
    background-image: linear-gradient(#fcfcfc, #f0f0f0);
    color: #3f3d3c;
    text-decoration: none;
    &:hover {
      background: #f0f0f0;
    }
  `,

  [types.PRIMARY]: css`
    ${coloredButtonStyles}
    background-color: #5db187;
    background-image: linear-gradient(#5db187, #42996d);
    &:hover {
      background: #42996d;
    }
  `,
  [types.SECONDARY]: css`
    ${coloredButtonStyles}
    background-color: #9884c5;
    background-image: linear-gradient(#9884c5, #785cba);

    &:hover {
      background: #785cba;
    }
  `,
};

const atlasKindStyles = {
  [types.DEFAULT]: css`
    background-color: transparent;
    border-color: transparent;
    color: #5d7599;
    &:hover {
      background-color: #ebeef2;
    }
    &:active {
      background-color: #e6e6e6;
    }
  `,

  [types.PRIMARY]: css`
    background-color: #5d7599;
    border-color: transparent;
    color: #ffffff;
    &:hover {
      background-color: #455772;
    }
    &:active {
      background-color: #37465b;
    }
  `,
  [types.SECONDARY]: css`
    background-color: #ffffff;
    border-color: #385f99;
    color: #385f99;
    &:hover {
      background-color: #ebeef2;
    }
    &:active {
      background-color: #e6e6e6;
    }
  `,
};

export const starlingSizeStyles = {
  [types.SMALL]: css`
    font-size: 13px;
    min-height: 23px;
    padding: 3px 8px;
  `,
  [types.MEDIUM]: css`
    font-size: 14px;
    min-height: 26px;
    padding: 6.5px 12px;
  `,
  [types.LARGE]: css`
    font-size: 16px;
    min-height: 29px;
    padding: 9px 20px;
  `,
};

export const atlasSizeStyles = {
  [types.SMALL]: css`
    height: 24px;
  `,
  [types.MEDIUM]: css`
    height: 40px;
  `,
  [types.LARGE]: css`
    height: 56px;
  `,
};

const starlingButton = {
  Button: ({ size, kind }) => css`
    ${starlingKindStyles[kind]}
    ${starlingSizeStyles[size]}
  align-items: center;
    appearance: none;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font-weight: bold;
    justify-content: center;
    line-height: 1.24;
    text-align: center;

    &:active {
      transform: scale(0.98);
    }

    &:focus {
      outline: none;
    }

    html:not([data-whatinput="mouse"]) &:focus,
    &[data-has-forced-focus]:focus {
      ${focusBorderStyles}
    }
  `,
};

const atlasButton = {
  Button: ({ size, kind }) => css`
    ${atlasSizeStyles[size]};
    ${atlasKindStyles[kind]};
    border-radius: 2px;
    border-style: solid;
    cursor: pointer;
    font-weight: 700;
    line-height: 16px;
    padding-left: 12px;
    padding-right: 12px;

    &:focus {
      outline: none;
    }

    html:not([data-whatinput="mouse"]) &:focus,
    &[data-has-forced-focus]:focus {
      ${focusBorderStyles}
    }
  `,
};

export default () => (
  <>
    <Gap.Small />

    <StoryHeading level={1}>No theme</StoryHeading>
    <Button>Raw denim mixtape</Button>
    <Gap />
    <StoryHeading level={1}>Starling theme</StoryHeading>
    <StoryHeading level={3}>Via prop</StoryHeading>
    <Button theme={starlingButton}>Default Button</Button>
    <Gap.Inline />
    <Button theme={starlingButton} kind="primary">
      Primary Button
    </Button>
    <Gap.Inline />
    <Button theme={starlingButton} kind="secondary">
      Secondary Button
    </Button>
    <Gap.Small />
    <CodeHeading>{`size={large}`}</CodeHeading>
    <Button theme={starlingButton} size="large">
      Mumblecore hammock polaroid
    </Button>

    <Gap.Small />
    <StoryHeading level={3}>Via provider</StoryHeading>
    <ThemeProvider theme={starlingButton}>
      <Button>YOLO flexitarian succulents</Button>
      <Gap.Small />
      <CodeHeading>{`size={large}`}</CodeHeading>
      <Button size="large">Mumblecore hammock polaroid</Button>
    </ThemeProvider>

    <Gap />

    <StoryHeading level={1}>Atlas theme</StoryHeading>
    <ThemeProvider theme={atlasButton}>
      <Button>Default Button</Button>
      <Gap.Inline />
      <Button kind="primary">Primary Button</Button>
      <Gap.Inline />
      <Button kind="secondary">Secondary Button</Button>
      <Gap.Inline />
      <CodeHeading>{`kind={primary} size={large}`}</CodeHeading>
      <Button kind="primary" size="large">
        Artisan vegan skateboard
      </Button>
    </ThemeProvider>
  </>
);
