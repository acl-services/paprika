import styled, { css } from "styled-components";
// import { spacer } from "@paprika/stylers/lib/helpers";

export const Header = styled.div(
  () => css`
    display: flex;
  `
);

export const HeaderContent = styled.div(
  ({ isBroken }) => css`
    display: flex;
    flex: 1 1 auto;

    ${isBroken &&
    css`
      background-color: turquoise;
      display: block;
    `}
  `
);

export const ExpandToggle = styled.div(
  ({ isCollapsed }) => css`
    background-color: darkorange;
    flex: 0 0 32px;

    ${isCollapsed &&
    css`
      transform: rotate(180deg);
    `}
  `
);
