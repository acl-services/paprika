import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens/lib/tokens";
import * as types from "../../types";

const sizeStyles = {
  [types.sizes.MEDIUM]: css`
    height: 18px;
    padding: ${tokens.spaceLg} ${stylers.spacer(2)};

    [data-pka-anchor="heading"] {
      margin: 0;
    }
  `,
  [types.sizes.LARGE]: css`
    height: 23px;
    padding: ${stylers.spacer(2)} ${stylers.spacer(3)};

    [data-pka-anchor="heading"] {
      margin: 0;
    }
  `,
};

export const hasAccentStyle = css`
  ${tokens.spaceSm} solid ${tokens.color.blue};
`;

export const Header = styled.div(
  ({ size, hasAccent }) => css`
    align-items: center;
    border-bottom: 1px solid ${tokens.border.color};
    box-sizing: border-box;
    border-top: ${hasAccent ? hasAccentStyle : ""};
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

    ${size ? sizeStyles[size] : ""};
  `
);
