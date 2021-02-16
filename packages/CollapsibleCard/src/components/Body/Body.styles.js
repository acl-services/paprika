import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";

export const Body = styled.div(
  ({ isCollapsed }) =>
    css`
      border-radius: 0 0 8px 8px;
      padding: ${spacer(2)} ${spacer(2)} ${spacer(3)};

      ${isCollapsed &&
        css`
          display: none;
        `}
    `
);
