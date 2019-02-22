import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import RawButton from "@paprika/raw-button";

// Common

const commonStyles = `
  align-items: center;
  appearance: none;
  border-radius: ${tokens.button.borderRadius};
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-family: ${tokens.fontFamily.default};
  font-weight: bold;
  justify-content: center;
  line-height: 1.2;
  text-align: center;
  vertical-align: middle;

  &:active {
    transform: scale(0.98);
  }
`;

const commonPostStyles = `
  &:focus {
    box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
    border-color: ${tokens.highlight.active.noBorder.borderColor};
    outline: none;
  }

  &:active {
    box-shadow: ${tokens.highlight.active.noBorder.boxShadow}, inset 0 1px 1px 0 rgba(0,0,0, 0.1),
      inset 0 1px 4px 0 rgba(0,0,0, 0.3);
  }
`;

const skeuomorphicStyles = `
  box-shadow: 0 1px 2px 0 rgba(0,0,0, 0.1); 
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: border;
`;

const coloredButtonStyles = `
  color: ${tokens.color.white};
  text-shadow: 0 1px 1px rgba(0,0,0, 0.2); // TODO: add mixin for transparent hex colours
`;

const textButtonStyles = `
  background: none;
  border-color: transparent;
`;

// States

const disabledStyles = `
  box-shadow: none;
  color: ${tokens.color.blackLighten40};
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
    padding: 7px ${tokens.spaceLg};
  `,
  large: `
    ${stylers.fontSize()};
    min-height: ${stylers.spacer(5)};
    padding: 9px ${stylers.spacer(2)};
  `,
};
sizeStyles.xsmall = sizeStyles.small;
sizeStyles.xlarge = sizeStyles.large;

// Types

const typeStyles = {
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
  `,
  minor: `
    ${textButtonStyles}

    &:hover {
      text-decoration: underline;
    }
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
  `,
};

// Modifiers

const fullWidthStyles = `
  display: flex;
  width: 100%;
`;

//
// Composition
//

const composedStyles = props => `
  ${commonStyles}

  ${sizeStyles[props.size]}
  ${typeStyles[props.type]}

  ${commonPostStyles}

  ${props.isFullWidth ? fullWidthStyles : ""}
  ${props.isActive ? activeStyles : ""}
  ${props.isDisabled ? disabledStyles : ""}
  ${["minor", "link"].includes(props.type) && props.isDisabled ? disabledTextStyles : ""}
`;

export const ButtonStyled = styled.button`
  ${props => composedStyles(props)}
`;

export const RawButtonStyled = styled(RawButton)`
  ${props => composedStyles(props)}
`;
