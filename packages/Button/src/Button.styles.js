import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { css, keyframes } from "styled-components";

// Common

const commonStyles = `
  ${stylers.alignMiddle}
  ${stylers.lineHeight(-1)};
  
  appearance: none;
  border-radius: ${tokens.button.borderRadius};
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-family: ${tokens.fontFamily.default};
  font-weight: bold;
  text-align: center;
  vertical-align: middle;

  &:focus {
    box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
    border-color: ${tokens.highlight.active.noBorder.borderColor};
    outline: none;
  }

  &:active {
    box-shadow: ${tokens.highlight.active.noBorder.boxShadow}, inset 0 1px 1px 0 rgba(0, 0, 0, 0.1),
      inset 0 1px 4px 0 rgba(0, 0, 0, 0.3);
    transform: scale(0.98);
  }
`;

const skeuomorphicStyles = `
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: border;
`;

const coloredButtonStyles = `
  color: ${tokens.color.white};
  text-shadow: 0 1px 1px ${stylers.alpha(tokens.color.blackPure, 0.2)};
`;

const textButtonStyles = `
  background: none;
  border-color: transparent;
`;

// States

const disabledStyles = `
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

  &, &:hover, &:focus {
    background: ${tokens.color.blackLighten70};
    border-color: ${tokens.color.blackLighten60};
    color: ${tokens.color.blackLighten40};
    text-decoration: none;
  }
`;

const disabledTextStyles = `
  ${disabledStyles}

  &, &:hover {
    background: none;
    border-color: transparent;
  }
`;

const activeStyles = `
  box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
  border-color: ${tokens.highlight.active.noBorder.borderColor};
`;

// Sizes

const sizeStyles = {
  small: `
    ${stylers.fontSize(-2)};
    min-height: ${stylers.spacer(3)};
    padding: 3px ${tokens.space};
  `,
  medium: `
    ${stylers.fontSize(-1)};
    min-height: ${stylers.spacer(4)};
    padding: 6.5px ${tokens.spaceLg};
  `,
  large: `
    ${stylers.fontSize()};
    min-height: ${stylers.spacer(5)};
    padding: 9px ${stylers.spacer(2)};
  `,
};

// Kinds

const kindStyles = props => ({
  default: `
    ${skeuomorphicStyles}

    background-image: linear-gradient(${tokens.color.blackLighten90}, ${tokens.color.blackLighten70});
    background-color: ${tokens.color.white};
    border-color: ${tokens.border.color};
    color: ${tokens.color.black};

    &:hover {
      background: ${tokens.color.blackLighten70};
      border-color: ${tokens.border.hoverColor};
    }

    ${props.isDisabled ? disabledStyles : ""}
  `,
  primary: `
    ${skeuomorphicStyles}
    ${coloredButtonStyles}

    background-image: linear-gradient(${tokens.color.greenLighten10}, ${tokens.color.green});
    background-color: ${tokens.color.greenLighten10};
    border-color: ${tokens.color.green};

    &:hover {
      background: ${tokens.color.green};
      border-color: ${tokens.border.greenDarken10};
    }

    ${props.isDisabled ? disabledStyles : ""}
  `,
  secondary: `
    ${skeuomorphicStyles}
    ${coloredButtonStyles}

    background-image: linear-gradient(${tokens.color.purpleLighten10}, ${tokens.color.purple});
    background-color: ${tokens.color.purpleLighten10};
    border-color: ${tokens.color.purple};

    &:hover {
      background: ${tokens.color.purple};
      border-color: ${tokens.border.purpleDarken10};
    }

    ${props.isDisabled ? disabledStyles : ""}
  `,
  destructive: `
    ${skeuomorphicStyles}
    ${coloredButtonStyles}

    background-image: linear-gradient(${tokens.color.orangeHighlight}, ${tokens.color.orange});
    background-color: ${tokens.color.orangeHighlight};
    border-color: ${tokens.color.orange};

    &:hover {
      background: ${tokens.color.orange};
      border-color: ${tokens.border.orangeDarken10};
    }

    ${props.isDisabled ? disabledStyles : ""}
  `,
  flat: `
    ${skeuomorphicStyles}

    background-color: ${tokens.color.white};
    border-color: ${tokens.border.color};
    box-shadow: none;
    color: ${tokens.color.black};

    &:hover {
      background: ${tokens.color.blackLighten70};
      border-color: ${tokens.border.hoverColor};
    }

    ${props.isDisabled ? disabledStyles : ""}
  `,
  minor: `
    ${textButtonStyles}

    &:hover {
      text-decoration: underline;
    }

    ${props.isDisabled ? disabledTextStyles : ""}
  `,
  link: `
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

    ${props.isDisabled ? disabledTextStyles : ""}
  `,
});

// Modifiers

const fullWidthStyles = `
  display: flex;
  width: 100%;
`;

//
// Composition
//

const buttonStyles = props => `
  ${commonStyles}
  ${sizeStyles[props.size]}
  ${kindStyles(props)[props.kind]}
  ${props.isFullWidth && !props.isSquare ? fullWidthStyles : ""}
  ${props.isActive ? activeStyles : ""}
`;

export default buttonStyles;

//
// Icons
//

const spinKeyframes = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const iconColors = {
  default: tokens.textColor.icon,
  primary: tokens.color.white,
  secondary: tokens.color.white,
  destructive: tokens.color.white,
  flat: tokens.textColor.icon,
  minor: tokens.textColor.icon,
  link: tokens.textColor.icon,
};

function getIconColor(props) {
  if (props.isDisabled) return tokens.color.blackDisabled;
  return iconColors[props.kind];
}

export const iconStyles = props => css`
  color: ${getIconColor(props)};
  display: inline-block;
  margin: 0 ${tokens.spaceSm} 0 0;

  svg {
    vertical-align: -${(stylers.lineHeightValue(-1) - 1) / 2}em;
  }

  ${props.isPending
    ? css`
        animation: ${spinKeyframes} 2s infinite linear;
      `
    : ""}

  ${props.isDropdown ? `margin:0 0 0 ${tokens.spaceSm};` : ""}
`;
