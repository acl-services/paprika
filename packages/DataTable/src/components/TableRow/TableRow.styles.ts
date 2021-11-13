import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { cellStyles } from "../../shared.styles";

export const TD = styled.div<{
  borderType: string;
}>(
  ({ borderType }) => css`
    ${cellStyles({ borderType })}
  `
);

export const TR = styled.div<{
  hasBackgroundColor: boolean;
}>(
  ({ hasBackgroundColor }) => css`
    background-color: ${hasBackgroundColor ? tokens.table.rowEven.backgroundColor : tokens.table.row.backgroundColor};

    &:last-child {
      ${TD} {
        border-bottom: 0;
      }
    }
  `
);
