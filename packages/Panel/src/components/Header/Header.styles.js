import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens/lib/tokens";
import Button from "@paprika/button";
import * as types from "../../types";

const sizeStyles = {
  [types.sizes.MEDIUM]: css`
    height: 18px;
    padding: 12px 16px;

    [data-pka-anchor="heading"] {
      margin: 0;
    }
  `,
  [types.sizes.LARGE]: css`
    height: 23px;
    padding: 16px 24px;

    [data-pka-anchor="heading"] {
      margin: 0;
    }
  `,
};

export const Header = styled.div(
  ({ size }) => css`
    align-items: center;
    border-bottom: 1px solid ${tokens.border.color}; 
    box-sizing: border-box;
    display: flex;
    height: ${spacer(8)};
    justify-content: space-between;
    min-height: ${spacer(6)};
    padding: ${spacer(2)} ${spacer(3)};
    width: 100%;
    &:focus {
      outline: 0;
    }

    [data-pka-anchor="heading"] {
      ${stylers.truncateText}
      display: block;
      margin: 0;
    }

    ${size ? sizeStyles[size] : ""};s
  `
);
