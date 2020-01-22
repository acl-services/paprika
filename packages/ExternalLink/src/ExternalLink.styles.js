import styled from "styled-components";
import tokens from "@paprika/tokens";
import { truncateText } from "@paprika/stylers/lib/includes";

export const ExternalLinkStyled = styled.a`
  border-radius: ${tokens.border.radius};
  color: ${tokens.textColor.link};
  display: inline-block;
  line-height: 1;
  padding: 1px 1px 1px ${tokens.spaceSm};
  text-decoration: none;

  &:focus,
  &:active {
    box-shadow: ${tokens.highlight.active.boxShadow};
    outline: none;
  }
`;

const externalLinkContentHoverFocus = `
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const ExternalLinkContentStyled = styled.span`
  display: inline-block;
  ${truncateText}
  width: calc(100% - 20px);

  ${props => {
    return props.hasUnderline ? "text-decoration: underline" : externalLinkContentHoverFocus;
  }}
`;

export const ExternalLinkIconStyles = `
  display: inline-block;
  margin-left: ${tokens.spaceSm};
  vertical-align: top;
`;
