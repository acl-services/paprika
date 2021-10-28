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
  color: ${tokens.color.white};

  &:hover,
  &:focus {
    color: ${(props: any) => (props.isSubtle ? tokens.color.white : tokens.color.blueLighten40)};
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
  ${blackFont};
  display: flex;
  padding: 0 ${tokens.spaceLg};

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

export const LinkContent = styled.span<{ hasTruncation: boolean }>(
  ({ hasTruncation }) => css`
    ${hasTruncation && stylers.truncateText};
  `
);

export const ExternalLinkIcon = styled(NewTabIcon)`
  color: ${tokens.textColor.icon};
  display: inline-block;
  font-size: 20px; // TO-DO: replace with tokens
  min-width: 20px;
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
      color: ${tokens.textColor.link};
      display: inline-flex;
      left: -${tokens.spaceSm};
      max-width: ${stylers.cssValue(maxWidth)};
      padding: 1px ${tokens.spaceSm};
      position: relative;

      &:focus {
        outline: none;
      }

      html:not([data-whatinput="mouse"]) &:focus,
      &[data-has-forced-focus]:focus {
        ${isMenu ? "" : `border-radius: ${tokens.border.radius};`}
        ${isMenu ? stylers.focusRing(true) : stylers.focusRing()}
      }

      ${linkHoverStyles};
      ${hasNoUnderline && noUnderlineStyles};
      ${isSubtle && blackFont};
      ${isDark && whiteFont};
      ${isMenu && navigationStyles};
    }
  `
);
