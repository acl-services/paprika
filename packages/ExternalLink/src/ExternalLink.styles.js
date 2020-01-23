import styled from "styled-components";
import tokens from "@paprika/tokens";
import { truncateText } from "@paprika/stylers/lib/includes";
import { toInt } from "@paprika/stylers/lib/helpers";

export const ExternalLink = styled.a`
  border-radius: ${tokens.border.radius};
  color: ${tokens.textColor.link};
  display: inline-block;
  max-width: 100%;
  position: relative;

  ${props => {
    return `padding: 1px ${props.iconFontSize + toInt(tokens.spaceSm)}px 1px ${tokens.spaceSm};`;
  }}

  &:focus,
  &:active {
    box-shadow: ${tokens.highlight.active.boxShadow};
    outline: none;
  }
`;

const contentHoverFocusStyles = `
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const ExternalLinkContent = styled.span`
  display: inline-block;
  ${truncateText}
  vertical-align: bottom;
  width: 100%;

  ${props => {
    return props.hasUnderline ? "text-decoration: underline" : contentHoverFocusStyles;
  }};
`;

export const ExternalLinkIconStyles = `
  color: ${tokens.textColor.icon};
  display: inline-block;
  margin-left: ${tokens.spaceSm};
  position: absolute;
  top: 0;
`;
