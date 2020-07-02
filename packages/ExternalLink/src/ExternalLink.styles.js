import styled from "styled-components";
import tokens from "@paprika/tokens";
import { truncateText } from "@paprika/stylers/lib/includes";
import { toInt } from "@paprika/stylers/lib/helpers";

export const ExternalLink = styled.a`
  align-items: center;
  border-radius: ${tokens.border.radius};
  color: ${tokens.textColor.link};
  display: inline-flex;
  max-width: 100%;
  position: relative;

  ${({ iconFontSize }) => `padding: 1px ${iconFontSize + toInt(tokens.spaceLg)}px 1px ${tokens.spaceSm};`}

  &:focus,
  &:active {
    box-shadow: ${tokens.highlight.active.boxShadow};
    outline: none;
  }
`;

const contentHoverFocusStyles = `
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const ExternalLinkContent = styled.span`
  display: inline-block;
  text-decoration: underline;
  ${truncateText}
  vertical-align: bottom;
  width: 100%;

  ${props => {
    return props.hasNoUnderline ? contentHoverFocusStyles : "";
  }};
`;

export const ExternalLinkIconStyles = `
  color: ${tokens.textColor.icon};
  display: inline-block;
  margin-left: ${tokens.spaceSm};
`;
