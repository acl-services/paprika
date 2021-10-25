import React from "react";
import { ThemeProvider, css } from "styled-components";
import { Gap, CodeHeading } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Button from "../../src";
import * as types from "../../src/types";

const coloredButtonStyles = css`
  color: ${tokens.color.white};
  text-decoration: none;
  text-shadow: 0 1px 1px ${stylers.alpha(tokens.color.blackPure, 0.2)};
`;

const starlingKindStyles = {
  [types.DEFAULT]: css`
    background-color: ${tokens.color.white};
    background-image: linear-gradient(${tokens.color.blackLighten90}, ${tokens.color.blackLighten70});
    color: ${tokens.color.black};
    text-decoration: none;
    &:hover {
      background: ${tokens.color.blackLighten70};
    }
  `,

  [types.PRIMARY]: css`
    ${coloredButtonStyles}
    background-color: ${tokens.color.greenLighten10};
    background-image: linear-gradient(${tokens.color.greenLighten10}, ${tokens.color.green});
    &:hover {
      background: ${tokens.color.green};
    }
  `,
  [types.SECONDARY]: css`
    ${coloredButtonStyles}
    background-color: ${tokens.color.purpleLighten10};
    background-image: linear-gradient(${tokens.color.purpleLighten10}, ${tokens.color.purple});

    &:hover {
      background: ${tokens.color.purple};
    }
  `,
};

const atlasKindStyles = {
  [types.DEFAULT]: css`
    background-color: transparent;
    border-color: transparent;
    color: ${tokens.color.diligentLighten30};
    &:hover {
      background-color: #ebeef2;
    }
    &:active {
      background-color: #e6e6e6;
    }
  `,

  [types.PRIMARY]: css`
    background-color: ${tokens.color.diligentLighten30};
    border-color: transparent;
    color: ${tokens.color.white};
    &:hover {
      background-color: ${tokens.color.diligentLighten20};
    }
    &:active {
      background-color: ${tokens.color.diligentLighten10};
    }
  `,
  [types.SECONDARY]: css`
    background-color: ${tokens.color.white};
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
    ${stylers.fontSize(-2)};
    min-height: ${stylers.spacer(3)};
    padding: 3px ${tokens.space};
  `,
  [types.MEDIUM]: css`
    ${stylers.fontSize(-1)};
    min-height: ${stylers.spacer(4)};
    padding: 6.5px ${tokens.spaceLg};
  `,
  [types.LARGE]: css`
    ${stylers.fontSize()};
    min-height: ${stylers.spacer(5)};
    padding: 9px ${stylers.spacer(2)};
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
  ${stylers.alignMiddle}
  ${starlingKindStyles[kind]}
  ${stylers.lineHeight(-1)}
  ${starlingSizeStyles[size]}
  appearance: none;
  border-radius: ${tokens.button.borderRadius};
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-weight: bold;
  text-align: center;

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }

  html:not([data-whatinput="mouse"]) &:focus,
  &[data-has-forced-focus]:focus {
    ${stylers.focusRing.bordered()}
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
      ${stylers.focusRing.bordered()}
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
