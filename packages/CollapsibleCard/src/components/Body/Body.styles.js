import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";

export const Body = styled.div(
  ({ isCollapsed }) =>
    css`
      display: inline-block;
      margin: 0 ${spacer(2)} ${spacer(3)};

      ${isCollapsed &&
        css`
          display: none;
        `}
    `
);
