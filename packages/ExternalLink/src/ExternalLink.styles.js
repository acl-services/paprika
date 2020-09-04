import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { truncateText } from "@paprika/stylers/lib/includes";
import { toInt } from "@paprika/stylers/lib/helpers";

const contentHoverFocusStyles = css`
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const ExternalLink = styled.a(
  ({ iconFontSize }) => css`
    align-items: center;
    border-radius: ${tokens.border.radius};
    color: ${tokens.textColor.link};
    display: inline-flex;
    max-width: 100%;
    padding: 1px ${iconFontSize + toInt(tokens.spaceLg)}px 1px ${tokens.spaceSm};
    position: relative;
    text-decoration: none;

    &:focus,
    &:active {
      box-shadow: ${tokens.highlight.active.boxShadow};
      outline: none;
    }
  `
);

export const ExternalLinkContent = styled.span(
  ({ hasNoUnderline }) => css`
    display: inline-block;
    text-decoration: underline;
    vertical-align: bottom;
    width: 100%;

    ${truncateText}

    ${hasNoUnderline && contentHoverFocusStyles};
  `
);

export const ExternalLinkIconStyles = css`
  color: ${tokens.textColor.icon};
  display: inline-block;
  margin-left: ${tokens.spaceSm};
`;
