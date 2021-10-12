import stylers from "@paprika/stylers";
import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import * as types from "./types";

const blackFont = css`
  color: ${tokens.textColor.default};
  &:hover,
  &:focus {
    color: ${tokens.textColor.default};
  }
`;

const noUnderlineStyles = css`
  text-decoration: none;
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

  &,
  &:hover,
  &:focus {
    text-decoration: none;
  }
  &:hover {
    background-color: ${tokens.color.blackLighten70};
  }
`;

const sizeStyles = {
  [types.SMALL]: ({ isNavigation }) => css`
    ${stylers.fontSize(-1)}
    svg {
      margin-right: ${tokens.spaceSm};
    }
    ${isNavigation &&
      css`
        ${navigationStyles};
        height: ${stylers.spacer(4)};
      `};
  `,

  [types.MEDIUM]: ({ isNavigation }) => css`
    ${stylers.fontSize(0)}
    svg {
      margin-right: ${tokens.spaceLg};
    }
    ${isNavigation &&
      css`
        ${navigationStyles};
        height: ${stylers.spacer(5)};
      `};
  `,
};

export const LinkContent = styled.span`
  svg {
    vertical-align: middle;
  }
`;

export const ExternalLinkIconStyles = css`
  color: ${tokens.textColor.icon};
  display: inline-block;
  font-size: 20px;
  &[data-pka-anchor="icon"] {
    margin-right: 0;
  }
`;

export const Link = styled.a(
  ({ isBlack, size, hasNoUnderline }) => css`
    &[data-pka-anchor="link"] {
      align-items: center;
      border-radius: ${tokens.border.radius};
      color: ${tokens.textColor.link};
      display: inline-flex;
      max-width: 100%;
      padding: 1px ${tokens.spaceSm};
      position: relative;

      &:focus,
      &:active {
        ${stylers.focusRing()}
      }

      ${linkHoverStyles};
      ${hasNoUnderline && noUnderlineStyles};
      ${isBlack && blackFont};
      ${sizeStyles[size]};
    }
  `
);
