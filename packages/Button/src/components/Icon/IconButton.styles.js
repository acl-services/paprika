import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Button from "../../Button";
import * as types from "../../types";

const iconButtonSizes = {
  [types.SMALL]: css`
    height: ${stylers.spacer(3)};
    line-height: ${Number.parseInt(tokens.space, 10) * 3 - 2}px;
    padding: 0;
    width: ${stylers.spacer(3)};
  `,
  [types.MEDIUM]: css`
    height: ${stylers.spacer(4)};
    line-height: ${Number.parseInt(tokens.space, 10) * 4 - 2}px;
    padding: 0;
    width: ${stylers.spacer(4)};
  `,
  [types.LARGE]: css`
    height: ${stylers.spacer(4.5)};
    line-height: ${Number.parseInt(tokens.space, 10) * 5 - 2}px;
    padding: 0;
    width: ${stylers.spacer(4.5)};
  `,
};

const minorStyles = ({ isDisabled, isActive }) => css`
  transition: background-color 0.2s ease-out;
  ${isDisabled
    ? css`
        &,
        &:hover,
        &:active {
          [data-pka-anchor="button.icon"] svg {
            color: ${tokens.color.blackDisabled};
          }
        }
      `
    : css`
        ${isActive &&
          css`
            background-color: ${tokens.color.blackLighten60};
          `}
        &:hover {
          background-color: ${stylers.alpha(tokens.color.black, 0.1)};
        }

        &:active {
          background-color: ${tokens.color.blackLighten60};
        }
      `}
`;

const darkStyles = css`
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${stylers.alpha(tokens.color.white, 0.2)};
  }

  &:active {
    background-color: ${stylers.alpha(tokens.color.white, 0.3)};
    transition: none;
  }

  [data-pka-anchor="button.icon"] {
    color: ${tokens.color.white};
  }
`;

export const IconButton = styled(Button)(
  ({ size, kind, isDark }) => css`
    ${iconButtonSizes[size]}
    ${kind === types.MINOR ? minorStyles : ""}
    ${isDark && darkStyles}
    [data-pka-anchor="button.icon"] {
      margin: 0;
    }
  `
);
