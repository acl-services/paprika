import styled, { css } from "styled-components";
// import { spacer } from "@paprika/stylers/lib/helpers";
// import Avatar from "@paprika/avatar";

export const Body = styled.div(
  ({ isCollapsed }) =>
    css`
      border: 0px solid silver;

      ${isCollapsed &&
      css`
        display: none;
      `}
    `
);
