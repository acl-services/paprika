import styled from "styled-components";
import tokens from "@paprika/tokens";
import { lineHeight, fontSize } from "@paprika/stylers/lib/helpers";
import ArrowLeftIcon from "@paprika/icon/lib/ArrowLeft";

export const Link = styled.a`
  color: ${({ isDark }) => (isDark ? tokens.color.white : tokens.textColor.subtle)};
  display: inline;
  font-weight: normal;
  min-height: 0;
  padding: 0 ${tokens.space};
  text-decoration: none;
  vertical-align: top;

  ${lineHeight()}
`;

export const ListItem = styled.li`
  display: inline;
  list-style-type: none;
  margin: 0;
  padding: 0;

  &::before {
    content: "/";
  }

  &:first-child {
    margin-left: -${tokens.space};
  }

  &:first-child::before {
    display: none;
  }
`;

export const ArrowIcon = styled(ArrowLeftIcon)`
  ${fontSize(-3)};
  margin-right: ${tokens.spaceSm};
  padding: 2px 0;
`;
