import styled from "styled-components";
import tokens from "@paprika/tokens";
import { lineHeight } from "@paprika/stylers/lib/helpers";
import Button from "@paprika/button";

export const Link = styled(Button.Link)`
  color: ${({ isDark }) => (isDark ? tokens.color.white : tokens.textColor.subtle)};
  display: inline;
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
