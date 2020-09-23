import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import styled, { css, keyframes } from "styled-components";
import * as types from "./types";

const dropShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.1)";

const enabled = content => css`
  &:not([disabled]):not([aria-disabled="true"]) {
    ${content};
  }
`;

// Borders

const borderColors = {
  [types.DEFAULT]: tokens.border.color,
  [types.PRIMARY]: tokens.color.green,
  [types.SECONDARY]: tokens.color.purple,
  [types.DESTRUCTIVE]: tokens.color.orange,
  [types.FLAT]: tokens.border.color,
  [types.MINOR]: "transparent",
  [types.LINK]: "transparent",
};

const borderHoverColors = {
  [types.DEFAULT]: tokens.border.hoverColor,
  [types.PRIMARY]: tokens.color.greenDarken10,
  [types.SECONDARY]: tokens.color.purpleDarken10,
  [types.DESTRUCTIVE]: tokens.color.orangeDarken10,
  [types.FLAT]: tokens.border.hoverColor,
  [types.MINOR]: "transparent",
  [types.LINK]: "transparent",
};

const borderStyles = ({ kind }) => css`
  border-color: ${borderColors[kind]};

  &:hover {
    ${enabled(css`
      border-color: ${borderHoverColors[kind]};
    `)}
  }
`;

// States

const disabledStyles = css`
  box-shadow: none;
  color: ${tokens.color.blackDisabled};
  cursor: not-allowed;
  text-decoration: none;
  text-shadow: none;

  &:focus {
    box-shadow: none;
    text-shadow: none;
    transform: none;
  }

  &,
  &:hover,
  &:focus {
    background: ${tokens.color.blackLighten70};
    border-color: ${tokens.color.blackLighten60};
    color: ${tokens.color.blackLighten40};
    text-decoration: none;
  }

  &,
  &:hover,
  &:active {
    box-shadow: none;
    transform: none;
  }
`;

const disabledTextStyles = css`
  ${disabledStyles}

  &, &:hover {
    background: none;
    border-color: transparent;
  }
`;

export const activeStyles = css`
  ${stylers.focusRing.bordered()}
`;

export const inactiveStyles = ({ kind }) => css`
  ${borderStyles}

  [data-whatinput="mouse"] &:not([data-has-forced-focus="true"]):focus {
    ${enabled(css`
      ${borderStyles}

      ${[types.FLAT, types.MINOR, types.LINK].includes(kind)
        ? css`
            box-shadow: none;
          `
        : css`
            box-shadow: ${dropShadow};
          `}
    `)}
  }
`;

// Common

export const commonStyles = css`
  ${stylers.alignMiddle}
  ${stylers.lineHeight(-1)}
  appearance: none;
  border-radius: ${tokens.button.borderRadius};
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;

  &:focus {
    ${stylers.focusRing.bordered()}
  }

  &:active {
    box-shadow: ${tokens.highlight.active.noBorder.boxShadow}, inset 0 1px 1px 0 rgba(0, 0, 0, 0.1),
      inset 0 1px 4px 0 rgba(0, 0, 0, 0.3);
    transform: scale(0.98);
  }
`;

const skeuomorphicStyles = css`
  box-shadow: ${dropShadow};
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: border;
`;

const coloredButtonStyles = css`
  color: ${tokens.color.white};
  text-shadow: 0 1px 1px ${stylers.alpha(tokens.color.blackPure, 0.2)};

  &:hover,
  &:visited {
    color: ${tokens.color.white};
    text-decoration: none;
  }
`;

const textButtonStyles = css`
  background: none;
  border-color: transparent;
`;

// Sizes

export const sizeStyles = {
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

// types

export const kindStyles = ({ isDisabled }) => ({
  [types.DEFAULT]: css`
    ${skeuomorphicStyles}
    background-color: ${tokens.color.white};
    background-image: linear-gradient(${tokens.color.blackLighten90}, ${tokens.color.blackLighten70});
    color: ${tokens.color.black};

    &:hover, &:visited {
      background: ${tokens.color.blackLighten70};
      color: ${tokens.color.black};
      text-decoration: none;
    }

    ${isDisabled && disabledStyles}
  `,
  [types.PRIMARY]: css`
    ${skeuomorphicStyles}
    ${coloredButtonStyles}

    background-color: ${tokens.color.greenLighten10};
    background-image: linear-gradient(${tokens.color.greenLighten10}, ${tokens.color.green});

    &:hover {
      background: ${tokens.color.green};
    }

    ${isDisabled && disabledStyles}
  `,
  [types.SECONDARY]: css`
    ${skeuomorphicStyles}
    ${coloredButtonStyles}

    background-color: ${tokens.color.purpleLighten10};
    background-image: linear-gradient(${tokens.color.purpleLighten10}, ${tokens.color.purple});

    &:hover {
      background: ${tokens.color.purple};
    }

    ${isDisabled && disabledStyles}
  `,
  [types.DESTRUCTIVE]: css`
    ${skeuomorphicStyles}
    ${coloredButtonStyles}

    background-color: ${tokens.color.orangeHighlight};
    background-image: linear-gradient(${tokens.color.orangeHighlight}, ${tokens.color.orange});

    &:hover {
      background: ${tokens.color.orange};
    }

    ${isDisabled && disabledStyles}
  `,
  [types.FLAT]: css`
    ${skeuomorphicStyles}

    background-color: ${tokens.color.white};
    box-shadow: none;
    color: ${tokens.color.black};

    &:hover, &:visited {
      background: ${tokens.color.blackLighten70};
      color: ${tokens.color.black};
      text-decoration:none;
    }

    ${isDisabled && disabledStyles}
  `,
  [types.MINOR]: css`
    ${textButtonStyles}

    &:hover {
      text-decoration: underline;
    }

    ${isDisabled && disabledTextStyles}
  `,
  [types.LINK]: css`
    ${textButtonStyles}

    color: ${tokens.textColor.link};
    font-weight: inherit;
    text-decoration: underline;

    &:hover {
      color: ${tokens.textColor.linkHover};
    }

    &:active {
      color: ${tokens.color.blue};
    }

    ${isDisabled && disabledTextStyles}
  `,
});

// Modifiers

export const fullWidthStyles = css`
  display: flex;
  width: 100%;
`;

//
// Composition
//

export const Button = styled.span(
  ({ size, kind, isFullWidth, isActive, ...props }) => css`
  ${commonStyles}
  ${sizeStyles[size]}
  ${kindStyles(props)[kind]}
  ${isFullWidth && fullWidthStyles}
  ${isActive ? activeStyles : inactiveStyles}
`
);

//
// Icons
//

const spinKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const iconColors = {
  [types.DEFAULT]: tokens.textColor.icon,
  [types.PRIMARY]: tokens.color.white,
  [types.SECONDARY]: tokens.color.white,
  [types.DESTRUCTIVE]: tokens.color.white,
  [types.FLAT]: tokens.textColor.icon,
  [types.MINOR]: tokens.textColor.icon,
  [types.LINK]: tokens.textColor.icon,
};

const getIconColor = ({ isDisabled, kind }) => (isDisabled ? tokens.color.blackDisabled : iconColors[kind]);

export const ButtonIcon = styled.span(
  ({ isPending, isSuffixIcon, ...props }) => css`
    align-items: center;
    color: ${getIconColor(props)};
    display: inline-flex;
    justify-content: center;
    margin: 0 ${tokens.spaceSm} 0 0;

    svg {
      vertical-align: -${(stylers.lineHeightValue(-1) - 1) / 2}em;
    }

    ${isPending &&
      css`
        animation: ${spinKeyframes} 2s infinite linear;
      `}

    ${isSuffixIcon &&
      css`
        margin: 0 0 0 ${tokens.spaceSm};
      `}
  `
);
