import styled from "styled-components";
import tokens from "@paprika/tokens";
import { fontSize, spacer } from "@paprika/stylers/lib/helpers";

export const PanelHeaderWrapper = styled.span`
  ${fontSize(1)}

  > [data-pka-anchor="icon"] {
    ${fontSize(3)}
    margin-right: ${tokens.spaceSm};
  }
`;

export const SortPanel = styled.div``;

export const Footer = styled.div`
  display: flex;
  flex-grow: 1;

  [data-pka-anchor="filter.clearButton"] {
    margin-left: auto;
  }
`;
