import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Button from "../../Button";
import * as types from "../../types";

const iconButtonSizes = {
  [types.SMALL]: css`
    font-size: 14px;
    height: ${stylers.spacer(3)};
    line-height: ${Number.parseInt(tokens.space, 10) * 3 - 2}px;
    padding: 0;
    width: ${stylers.spacer(3)};
  `,
  [types.MEDIUM]: css`
    font-size: 18px;
    height: ${stylers.spacer(4)};
    line-height: ${Number.parseInt(tokens.space, 10) * 4 - 2}px;
    padding: 0;
    width: ${stylers.spacer(4)};
  `,
  [types.LARGE]: css`
    font-size: 22px;
    height: ${stylers.spacer(5)};
    line-height: ${Number.parseInt(tokens.space, 10) * 5 - 2}px;
    padding: 0;
    width: ${stylers.spacer(5)};
  `,
};

const minorStyles = ({ isDisabled }) => css`
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
        &:hover {
          background-color: ${stylers.alpha(tokens.color.black, 0.1)};
        }

        &:active {
          background-color: ${stylers.alpha(tokens.color.black, 0.2)};
        }
      `}
`;

export const IconButton = styled(Button)(
  ({ size, kind }) => css`
    ${iconButtonSizes[size]}
    ${kind === types.MINOR ? minorStyles : ""}

  [data-pka-anchor="button.icon"] {
      color: inherit;
      margin: 0;
    }
  `
);
