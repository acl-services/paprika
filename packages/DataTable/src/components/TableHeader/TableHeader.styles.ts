import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { cellStyles } from "../../shared.styles";

const headerStyles = css`
  background: ${tokens.table.header.backgroundColor};
  font-weight: bold;
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

export const Header = styled.div<{ isHeaderSticky: boolean }>(
  ({ isHeaderSticky }) => css`
    top: 0;
    width: fit-content;
    z-index: 1;

    ${isHeaderSticky ? "position: sticky;" : ""}
  `
);
