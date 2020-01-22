import styled from "styled-components";
import tokens from "@paprika/tokens";

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

export const ExternalLinkContentStyled = styled.span`
  color: ${tokens.textColor.icon};

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  ${props => {
    return props.hasUnderline ? "text-decoration: underline" : "";
  }}
`;

export const ExternalLinkIconStyles = `
  display: inline-block;
  margin-left: ${tokens.spaceSm};
  vertical-align: top;
`;
