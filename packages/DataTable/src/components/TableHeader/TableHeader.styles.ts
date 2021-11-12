import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { cellStyles } from "../../shared.styles";

const headerStyles = css`
  background: ${tokens.table.header.backgroundColor};
  font-weight: bold;
`;

const stickyHeaderStyles = css`
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const TH = styled.div<{
  borderType: string;
}>(
  ({ borderType }) => css`
    ${cellStyles({ borderType })}
  `
);

export const TR = styled.div`
  ${headerStyles}

  &:first-child {
    ${TH} {
      border-top: 0;
    }
  }
`;

export const THEAD = styled.div<{ isHeaderSticky: boolean; totalColumnsWidth: number }>(
  ({ isHeaderSticky, totalColumnsWidth }) => css`
    width: ${totalColumnsWidth}px;

    ${isHeaderSticky ? stickyHeaderStyles : ""}
  `
);
