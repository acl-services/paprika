import styled from "styled-components";
import tokens from "@paprika/tokens";
import Button from "@paprika/button";

export const ExpandButton = styled(Button.Icon)`
  color: ${({ isDark }) => (isDark ? tokens.color.white : tokens.textColor.subtle)};
  height: 20px;
  margin: -1px ${tokens.spaceSm} 0;
  min-height: 20px;
  width: 20px;

  &:hover {
    background-color: ${({ isDark }) => (isDark ? tokens.color.blackLighten10 : tokens.color.blackLighten70)};
  }
`;

export const ExpandButtonWrapper = styled.li`
  display: ${({ isHidden }) => (isHidden ? "none" : "inline")};
  list-style-type: none;
  margin: 0;
  padding: 0;

  &::before {
    content: "/";
  }
`;
