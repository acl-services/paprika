import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

import { fontSize } from "@paprika/stylers/lib/helpers";
import { borderTypesStyles } from "../../Table.styles";

export const Thead = styled.thead`
  background: ${tokens.table.header.backgroundColor};
  position: relative;
  text-align: start;
`;

export const TH = styled.th(
  ({ borderType, sticky }) => css`
    ${fontSize()}
    ${borderType in borderTypesStyles ? borderTypesStyles[borderType] : ""}
    background: ${tokens.table.header.backgroundColor};
    font-weight: bold;
    padding: ${tokens.space};
    position: sticky;
    text-align: start;
    /** [Sticky] This will work only when the header is made of one TR more work will be need to do
    in order to support complex headers with multiple TH
    */
    top: -1px;
    z-index: 2;
    ${typeof sticky !== "undefined" ? `z-index: 3; inset-inline-start: ${!Number.isNaN(sticky) ? sticky : 0}px;` : ""};
  `
);
