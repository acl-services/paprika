import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens/lib/tokens";
import * as types from "../../types";

const sizeStyles = {
  [types.sizes.MEDIUM]: css`
    height: 18px;
    min-height: ${spacer(6)};
    padding: ${tokens.spaceLg} ${stylers.spacer(2)};
  `,
  [types.sizes.LARGE]: css`
    height: 23px;
    min-height: ${spacer(8)};
    padding: ${stylers.spacer(2)} ${stylers.spacer(3)};
  `,
};

export const hasAccentStyle = css`
  border-top: ${tokens.spaceSm} solid ${tokens.color.blue};
`;

export const Header = styled.div(
  ({ size, hasAccent }) => css`
    align-items: center;
    border-bottom: 1px solid ${tokens.border.color};
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    &:focus {
      outline: 0;
    }

    [data-pka-anchor="heading"] {
      ${stylers.truncateText}
      display: block;
      margin: 0;
    }

    ${sizeStyles[size]};
    ${hasAccent ? hasAccentStyle : ""};
  `
);
