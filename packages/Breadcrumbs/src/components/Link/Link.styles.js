import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import ArrowLeftIcon from "@paprika/icon/lib/ArrowLeft";

export const Link = styled.a`
  ${stylers.lineHeight()}
  color: ${({ isDark }) => (isDark ? tokens.color.white : tokens.textColor.subtle)};
  display: inline;
  font-weight: normal;
  min-height: 0;
  padding: 0 ${tokens.space};
  text-decoration: none;
  vertical-align: top;
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

export const BackIcon = styled(ArrowLeftIcon)`
  ${stylers.fontSize(-1)};
  margin: 1px ${tokens.spaceSm} 0 0;
`;
