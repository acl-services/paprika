import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import * as types from "./types";

const sizeStyles = {
  [types.SMALL]: css`
    ${stylers.fontSize(-2)}
    height: ${stylers.spacer(3)};
  `,
  [types.MEDIUM]: css`
    ${stylers.fontSize(-1)}
    height: ${stylers.spacer(4)};
  `,
  [types.LARGE]: css`
    ${stylers.fontSize()}
    height: ${stylers.spacer(5)};
  `,
};

const hasIconStyles = ({ size }) => css`
  padding-left: ${size === types.LARGE ? stylers.spacer(4) : stylers.spacer(3)};
`;

const shouldShowClearButtonStyles = ({ size }) => css`
  padding-right: ${size === types.LARGE ? stylers.spacer(4) : stylers.spacer(3)};
`;

export const InputContainer = styled.div`
  line-height: 1;
  position: relative;

  input::-webkit-search-cancel-button {
    display: none;
  }
`;

export const Input = styled.input(
  ({ hasError, hasIcon, isDisabled, isReadOnly, shouldShowClearButton, size }) => css`
    background-color: ${tokens.color.white};
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    box-shadow: none;
    box-sizing: border-box;
    color: ${tokens.color.black};
    display: block;
    margin: 0;
    padding: 0 ${tokens.space};
    transition: box-shadow 0.2s, color 0.2s;
    width: 100%;
    ${stylers.placeholders}
    ${sizeStyles[size]}
    ${hasIcon && hasIconStyles}
    ${shouldShowClearButton && shouldShowClearButtonStyles}
    ${hasError && stylers.errorFormStyles}
    ${isDisabled && stylers.disabledFormStyles}
    ${isReadOnly && stylers.readOnlyFormStyles}

    &:focus {
      ${isReadOnly ? stylers.focusRing.subtle() : stylers.focusRing.bordered()}
    }

    &::-ms-clear {
      display: none;
    }
`
);

/* Icons */

const iconSizeStyles = {
  [types.SMALL]: css`
    ${stylers.fontSize(-2)}
    margin-left: 3px;
    padding: 0 ${tokens.spaceSm};
  `,
  [types.MEDIUM]: css`
    ${stylers.fontSize()}
    margin-left: 2px;
    padding: 0 ${tokens.spaceSm};
  `,
  [types.LARGE]: css`
    ${stylers.fontSize(2)}
    margin-left: ${tokens.spaceSm};
    padding: 0 ${tokens.spaceSm};
  `,
};

const disabledIconStyles = css`
  color: ${tokens.color.blackLighten60};
`;

const iconStyles = ({ isDisabled }) => css`
  color: ${tokens.textColor.icon};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${stylers.z(1)};
  ${isDisabled && disabledIconStyles}
`;

export const Icon = styled.span(
  ({ size }) => css`
    ${iconStyles}
    ${iconSizeStyles[size]}
    
    svg {
      vertical-align: middle;
    }
  `
);

export const ClearButton = styled(Button.Icon)`
  border-radius: ${tokens.border.radius};
  color: ${tokens.color.blackLighten50};
  right: ${tokens.spaceSm};
  transition: color 0.2s ease-out;
  ${iconStyles}

  &:hover {
    color: ${tokens.color.blackLighten30};
    background-color: transparent;
  }

  &:active {
    color: ${tokens.color.black};
    transform: translateY(-50%);
  }
`;
