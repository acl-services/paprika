import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import styled, { css, keyframes } from "styled-components";
import * as types from "./types";

const dropShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.1)";

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

const disabledBorderColors = {
  [types.DEFAULT]: tokens.border.color,
  [types.PRIMARY]: tokens.border.color,
  [types.SECONDARY]: tokens.border.color,
  [types.DESTRUCTIVE]: tokens.border.color,
  [types.FLAT]: tokens.border.color,
  [types.MINOR]: "transparent",
  [types.LINK]: "transparent",
};

const borderStyles = ({ kind, isDisabled, isActive }) => css`
  ${!isDisabled &&
    !isActive &&
    css`
      border-color: ${borderColors[kind]};
      &:hover {
        border-color: ${borderHoverColors[kind]};
      }
    `}

  [data-whatinput="keyboard"] &:focus {
    ${stylers.focusRing.bordered()}
  }

  [data-whatinput="keyboard"] &[aria-disabled="true"]:focus {
    border-color: transparent;
    box-shadow: none;
    ${stylers.focusRing.subtle()}
  }
`;

// States

const disabledStyles = ({ kind }) => css`
  border-color: ${disabledBorderColors[kind]};
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
  }
`;

export const activeStyles = css`
  ${stylers.focusRing.bordered()}
`;

// Common

export const commonStyles = css`
  ${stylers.alignMiddle}
  ${stylers.lineHeight(-1)}
  ${borderStyles}
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

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline:none;
  }
`;

const skeuomorphicStyles = css`
  box-shadow: ${dropShadow};
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: border;
`;

const coloredButtonStyles = css`
  text-shadow: 0 1px 1px ${stylers.alpha(tokens.color.blackPure, 0.2)};

  &,
  &:hover,
  &:active,
  &:visited {
    color: ${tokens.color.white};
    text-decoration: none;
  }
`;

const textButtonStyles = css`
  &,
  &:hover,
  &:active,
  &:visited {
    background: none;
  }
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

// Kinds

export const kindStyles = {
  [types.DEFAULT]: ({ isDisabled }) => css`
    ${skeuomorphicStyles}

    &, 
    &:hover, 
    &:active, 
    &:visited {
      background-color: ${tokens.color.white};
      background-image: linear-gradient(${tokens.color.blackLighten90}, ${tokens.color.blackLighten70});
      color: ${tokens.color.black};
      text-decoration: none;
    }

    &:hover,
    &:active {
      background: ${tokens.color.blackLighten70};
    }

    ${isDisabled && disabledStyles}
  `,

  [types.PRIMARY]: ({ isDisabled }) => css`
    ${skeuomorphicStyles}
    ${coloredButtonStyles}

    &, 
    &:hover, 
    &:active, 
    &:visited {
      background-color: ${tokens.color.greenLighten10};
      background-image: linear-gradient(${tokens.color.greenLighten10}, ${tokens.color.green});
    }

    &:hover {
      background: ${tokens.color.green};
    }

    ${isDisabled && disabledStyles}
  `,

  [types.SECONDARY]: ({ isDisabled }) => css`
    ${skeuomorphicStyles}
    ${coloredButtonStyles}

    &, 
    &:hover, 
    &:active, 
    &:visited {
      background-color: ${tokens.color.purpleLighten10};
      background-image: linear-gradient(${tokens.color.purpleLighten10}, ${tokens.color.purple});
    }

    &:hover {
      background: ${tokens.color.purple};
    }

    ${isDisabled && disabledStyles}
  `,

  [types.DESTRUCTIVE]: ({ isDisabled }) => css`
    ${skeuomorphicStyles}
    ${coloredButtonStyles}

    &, 
    &:hover, 
    &:active, 
    &:visited {
      background-color: ${tokens.color.orangeHighlight};
      background-image: linear-gradient(${tokens.color.orangeHighlight}, ${tokens.color.orange});
    }

    &:hover {
      background: ${tokens.color.orange};
    }

    ${isDisabled && disabledStyles}
  `,

  [types.FLAT]: ({ isDisabled }) => css`
    ${skeuomorphicStyles}

    &, 
    &:hover, 
    &:active, 
    &:visited {
      background-color: ${tokens.color.white};
      color: ${tokens.color.black};
    }

    &:hover,
    &:visited {
      background: ${tokens.color.blackLighten70};
      color: ${tokens.color.black};
      text-decoration: none;
    }

    ${isDisabled && disabledStyles}
  `,

  [types.MINOR]: ({ isDisabled }) => css`
    ${textButtonStyles}

    &:hover {
      text-decoration: underline;
    }

    ${isDisabled && disabledTextStyles}
  `,

  [types.LINK]: ({ isDisabled }) => css`
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
};

// Modifiers

export const fullWidthStyles = css`
  display: flex;
  width: 100%;
`;

//
// Composition
//

export const Button = styled.span(
  ({ kind, size, isFullWidth, isActive, isDisabled }) => css`
  ${commonStyles}
  ${sizeStyles[size]}
  ${kindStyles[kind]}
  ${isFullWidth && fullWidthStyles}
  ${isActive && !isDisabled && activeStyles}
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
