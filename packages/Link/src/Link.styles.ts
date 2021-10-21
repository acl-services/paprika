import stylers from "@paprika/stylers";
import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { NewTab as NewTabIcon } from "@paprika/icon";

const noUnderlineStyles = css`
  text-decoration: none;
`;

const blackFont = css`
  color: ${tokens.textColor.default};
  &:hover,
  &:focus {
    color: ${tokens.textColor.linkHover};
  }
`;

const whiteFont = css`
  color: ${tokens.color.offWhite};
  ${noUnderlineStyles};
  &:hover,
  &:focus {
    color: ${tokens.color.offWhite};
  }
`;

const linkHoverStyles = css`
  &:hover,
  &:focus {
    color: ${tokens.textColor.linkHover};
    text-decoration: underline;
  }
`;

/** Navigation */
const navigationStyles = css`
  display: flex;
  ${blackFont};
  padding: 0 calc(3 * ${tokens.spaceSm});

  &,
  &:hover,
  &:focus {
    text-decoration: none;
    color: ${tokens.textColor.default};
  }
  &:hover {
    background-color: ${tokens.color.blackLighten70};
  }
`;

export const LinkContent = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ExternalLinkIconStyles = styled(NewTabIcon)`
  color: ${tokens.textColor.icon};
  display: inline-block;
  font-size: 20px;
  &[data-pka-anchor="icon"] {
    margin-right: 0;
  }
`;

export const Link = styled.a<{
  isSubtle: boolean;
  hasNoUnderline: boolean;
  isDark: boolean;
  isMenu: boolean;
  maxWidth: string;
  [x: string]: any;
}>(
  ({ hasNoUnderline, isSubtle, isDark, isMenu, maxWidth }) => css`
    &[data-pka-anchor="link"] {
      align-items: center;
      border-radius: ${tokens.border.radius};
      color: ${tokens.textColor.link};
      display: inline-flex;
      left: -${tokens.spaceSm};
      ${maxWidth ? `max-width: ${maxWidth};` : ""}
      padding: 1px ${tokens.spaceSm};
      position: relative;

      &:focus {
        outline: none;
      }

      html:not([data-whatinput="mouse"]) &:focus,
      &[data-has-forced-focus]:focus {
        ${stylers.focusRing()}
      }

      ${linkHoverStyles};
      ${hasNoUnderline && noUnderlineStyles};
      ${isSubtle && blackFont};
      ${isDark && whiteFont};
      ${isMenu && navigationStyles};
    }
  `
);
