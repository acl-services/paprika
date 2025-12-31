import styled from "styled-components";
import tokens from "@paprika/tokens";
import { fontSize, spacer } from "@paprika/stylers/lib/helpers";

export const PanelHeaderWrapper = styled.span`
  ${fontSize(1)}

  > [data-pka-anchor="icon"] {
    ${fontSize(3)}
    margin-inline-end: ${tokens.spaceSm};
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-grow: 1;

  [data-pka-anchor="filter.clearButton"] {
    margin-inline-start: auto;
  }
`;

export const GenericNoAppliedPlaceholder = styled.div`
  margin-bottom: ${spacer(2)};
`;
