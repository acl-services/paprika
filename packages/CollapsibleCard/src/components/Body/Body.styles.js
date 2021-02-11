import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens";

export const Body = styled.div(
  ({ isCollapsed }) =>
    css`
      background-color: ${tokens.color.white};
      border-radius: 0 0 8px 8px;
      display: inline-block;
      padding: ${spacer(2)} ${spacer(2)} ${spacer(3)};

      ${isCollapsed &&
        css`
          display: none;
        `}
    `
);
