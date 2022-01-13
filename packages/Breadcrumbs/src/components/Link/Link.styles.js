import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import ArrowLeftIcon from "@paprika/icon/lib/ArrowLeft";

export const Link = styled.a(
  ({ isDark }) => css`
  ${stylers.lineHeight()}
  ${stylers.fontSize(-2)}
  color: ${isDark ? tokens.color.white : tokens.textColor.subtle};
  display: inline;
  font-weight: normal;
  margin: 0 ${tokens.spaceSm};
  min-height: 0;
  padding: 0 3px;
  text-decoration: none;
  vertical-align: top;
`
);

export const ListItem = styled.li(
  ({ isUsingDefaultLinkComponent }) => css`
    display: inline;
    list-style-type: none;
    margin: 0;
    padding: 0;

    &::before {
      content: "/";
    }

    &:first-child {
      margin-left: ${isUsingDefaultLinkComponent ? `-${tokens.space}` : "-7px"};
    }

    &:first-child::before {
      display: none;
    }
  `
);

export const BackIcon = styled(ArrowLeftIcon)`
  ${stylers.fontSize(-1)};
  margin: 1px ${tokens.spaceSm} 0 0;
`;
