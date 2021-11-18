import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { truncateText } from "@paprika/stylers/lib/includes";

const contentHoverFocusStyles = css`
  &[data-pka-anchor="externalLink.content"] {
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export const ExternalLink = styled.a`
  align-items: center;
  border-radius: ${tokens.border.radius};
  color: ${tokens.textColor.link};
  display: inline-flex;
  max-width: 100%;
  padding: 1px ${tokens.spaceSm};
  position: relative;
  text-decoration: none;

  &:focus,
  &:active {
    ${stylers.focusRing()}
  }
`;

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
`;
