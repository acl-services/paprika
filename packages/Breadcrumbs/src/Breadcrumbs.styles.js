import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { fontSize, lineHeight } from "@paprika/stylers/lib/helpers";
import { Link } from "./components/Link/Link.styles";

export const Nav = styled.nav`
  color: ${({ isDark }) => (isDark ? tokens.color.white : tokens.textColor.subtle)};
  font-weight: bold;
  ${fontSize(-2)}
  ${lineHeight()}

  ${Link} {
    ${fontSize(-2)}
  }
`;

export const List = styled.ol`
  display: inline;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      li[data-pka-anchor="breadcrumbs.listItem"] {
        display: none;

        &:first-child,
        &:nth-last-child(1),
        &:nth-last-child(2) {
          display: inline;
        }
      }
    `}
`;
