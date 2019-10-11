import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Button from "./Button";

const iconButtonSizes = {
  [ShirtSizes.SMALL]: css`
    ${stylers.fontSize(-2)};
    height: ${stylers.spacer(3)};
    line-height: ${Number.parseInt(tokens.space, 10) * 3 - 2}px;
    padding: 0;
    width: ${stylers.spacer(3)};
  `,
  [ShirtSizes.MEDIUM]: css`
    ${stylers.fontSize(1)};
    height: ${stylers.spacer(4)};
    line-height: ${Number.parseInt(tokens.space, 10) * 4 - 2}px;
    padding: 0;
    width: ${stylers.spacer(4)};
  `,
  [ShirtSizes.LARGE]: css`
    ${stylers.fontSize(3)};
    height: ${stylers.spacer(5)};
    line-height: ${Number.parseInt(tokens.space, 10) * 5 - 2}px;
    padding: 0;
    width: ${stylers.spacer(5)};
  `,
};

const minorStyles = css`
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${stylers.alpha(tokens.color.black, 0.1)};
  }

  &:active {
    background-color: ${stylers.alpha(tokens.color.black, 0.2)};
  }
`;

const iconButtonStyles = css`
  ${({ size }) => iconButtonSizes[size]}
  ${({ kind }) => (kind === Button.Kinds.MINOR ? minorStyles : "")}

  .button__icon {
    color: inherit;
    margin: 0;
  }
`;

export default iconButtonStyles;
