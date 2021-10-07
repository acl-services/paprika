import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import Button from "@paprika/button";

export const ExpandButton = styled(Button.Icon)(
  ({ isDark }) => css`
    color: ${isDark ? tokens.color.white : tokens.textColor.subtle};
    height: 20px;
    margin: -3px ${tokens.spaceSm} 0;
    min-height: 20px;
    width: 20px;

    &:hover {
      background-color: ${isDark ? tokens.color.blackLighten10 : tokens.color.blackLighten70};
    }
  `
);

export const ExpandButtonWrapper = styled.li(
  ({ isHidden }) => css`
    display: ${isHidden ? "none" : "inline"};
    list-style-type: none;
    margin: 0;
    padding: 0;

    &::before {
      content: "/";
    }
  `
);
