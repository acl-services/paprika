import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { css, keyframes } from "styled-components";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Kinds from "./ButtonKinds";

const dropShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.1)";

const enabled = content => css`
  &:not([disabled]):not([aria-disabled="true"]) {
    ${content};
  }
`;

// Borders

const borderColors = {
  [Kinds.DEFAULT]: tokens.border.color,
  [Kinds.PRIMARY]: tokens.color.green,
  [Kinds.SECONDARY]: tokens.color.purple,
  [Kinds.DESTRUCTIVE]: tokens.color.orange,
  [Kinds.FLAT]: tokens.border.color,
  [Kinds.MINOR]: "transparent",
  [Kinds.LINK]: "transparent",
};

const borderHoverColors = {
  [Kinds.DEFAULT]: tokens.border.hoverColor,
  [Kinds.PRIMARY]: tokens.color.greenDarken10,
  [Kinds.SECONDARY]: tokens.color.purpleDarken10,
  [Kinds.DESTRUCTIVE]: tokens.color.orangeDarken10,
  [Kinds.FLAT]: tokens.border.hoverColor,
  [Kinds.MINOR]: "transparent",
  [Kinds.LINK]: "transparent",
};

const borderStyles = css`
  border-color: ${({ kind }) => borderColors[kind]};

  &:hover {
    ${enabled(css`
      border-color: ${({ kind }) => borderHoverColors[kind]};
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

const activeStyles = css`
  ${stylers.focusRing.bordered()}
`;

const inactiveStyles = css`
  ${borderStyles}

  [data-whatinput="mouse"] &:not([data-has-forced-focus="true"]):focus {
    ${enabled(css`
      ${borderStyles}

      ${({ kind }) =>
        [Kinds.FLAT, Kinds.MINOR, Kinds.LINK].includes(kind)
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

const commonStyles = css`
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
`;

const textButtonStyles = css`
  background: none;
  border-color: transparent;
`;

// Sizes

const sizeStyles = {
  [ShirtSizes.SMALL]: css`
    ${stylers.fontSize(-2)};
    min-height: ${stylers.spacer(3)};
    padding: 3px ${tokens.space};
  `,
  [ShirtSizes.MEDIUM]: css`
    ${stylers.fontSize(-1)};
    min-height: ${stylers.spacer(4)};
    padding: 6.5px ${tokens.spaceLg};
  `,
  [ShirtSizes.LARGE]: css`
    ${stylers.fontSize()};
    min-height: ${stylers.spacer(5)};
    padding: 9px ${stylers.spacer(2)};
  `,
};

// Kinds

const kindStyles = props => ({
  [Kinds.DEFAULT]: css`
    ${skeuomorphicStyles}

    background-color: ${tokens.color.white};
    background-image: linear-gradient(${tokens.color.blackLighten90}, ${tokens.color.blackLighten70});
    color: ${tokens.color.black};

    &:hover {
      background: ${tokens.color.blackLighten70};
    }

    ${props.isDisabled && disabledStyles}
  `,
  [Kinds.PRIMARY]: css`
    ${skeuomorphicStyles}
    ${coloredButtonStyles}

    background-color: ${tokens.color.greenLighten10};
    background-image: linear-gradient(${tokens.color.greenLighten10}, ${tokens.color.green});

    &:hover {
      background: ${tokens.color.green};
    }

    ${props.isDisabled && disabledStyles}
  `,
  [Kinds.SECONDARY]: css`
    ${skeuomorphicStyles}
    ${coloredButtonStyles}

    background-color: ${tokens.color.purpleLighten10};
    background-image: linear-gradient(${tokens.color.purpleLighten10}, ${tokens.color.purple});

    &:hover {
      background: ${tokens.color.purple};
    }

    ${props.isDisabled && disabledStyles}
  `,
  [Kinds.DESTRUCTIVE]: css`
    ${skeuomorphicStyles}
    ${coloredButtonStyles}

    background-color: ${tokens.color.orangeHighlight};
    background-image: linear-gradient(${tokens.color.orangeHighlight}, ${tokens.color.orange});

    &:hover {
      background: ${tokens.color.orange};
    }

    ${props.isDisabled && disabledStyles}
  `,
  [Kinds.FLAT]: css`
    ${skeuomorphicStyles}

    background-color: ${tokens.color.white};
    box-shadow: none;
    color: ${tokens.color.black};

    &:hover {
      background: ${tokens.color.blackLighten70};
    }

    ${props.isDisabled && disabledStyles}
  `,
  [Kinds.MINOR]: css`
    ${textButtonStyles}

    &:hover {
      text-decoration: underline;
    }

    ${props.isDisabled && disabledTextStyles}
  `,
  [Kinds.LINK]: css`
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

    ${props.isDisabled && disabledTextStyles}
  `,
});

// Modifiers

const fullWidthStyles = css`
  display: flex;
  width: 100%;
`;

//
// Composition
//

const buttonStyles = props => css`
  ${commonStyles}
  ${sizeStyles[props.size]}
  ${kindStyles(props)[props.kind]}
  ${props.isFullWidth && fullWidthStyles}
  ${({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
`;

export default buttonStyles;

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
  [Kinds.DEFAULT]: tokens.textColor.icon,
  [Kinds.PRIMARY]: tokens.color.white,
  [Kinds.SECONDARY]: tokens.color.white,
  [Kinds.DESTRUCTIVE]: tokens.color.white,
  [Kinds.FLAT]: tokens.textColor.icon,
  [Kinds.MINOR]: tokens.textColor.icon,
  [Kinds.LINK]: tokens.textColor.icon,
};

const getIconColor = props => (props.isDisabled ? tokens.color.blackDisabled : iconColors[props.kind]);

export const iconStyles = props => css`
  align-items: center;
  color: ${getIconColor(props)};
  display: inline-flex;
  justify-content: center;
  margin: 0 ${tokens.spaceSm} 0 0;

  svg {
    vertical-align: -${(stylers.lineHeightValue(-1) - 1) / 2}em;
  }

  ${props.isPending &&
    css`
      animation: ${spinKeyframes} 2s infinite linear;
    `}

  ${props.isSuffixIcon &&
    css`
      margin: 0 0 0 ${tokens.spaceSm};
    `}
`;
