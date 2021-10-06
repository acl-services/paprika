import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Nav = styled.nav(
  ({ isDark }) => css`
    ${stylers.fontSize(-2)}
    ${stylers.lineHeight()}
    color: ${isDark ? tokens.color.white : tokens.textColor.subtle};
    font-weight: bold;
  `
);

export const List = styled.ol(
  ({ isCollapsed }) => css`
    display: inline;
    list-style-type: none;
    margin: 0;
    padding: 0;

    ${isCollapsed &&
      css`
        li[data-pka-anchor="breadcrumbs.list-item"] {
          display: none;

          &:first-child,
          &:nth-last-child(1),
          &:nth-last-child(2) {
            display: inline;
          }
        }
      `}
  `
);
