import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { fontSize } from "@paprika/stylers/lib/helpers";

export const Table = styled.div<{
  width: number;
  height: number;
  hasInfiniteLoader: boolean;
}>(
  ({ width, height, hasInfiniteLoader }) => css`
    border: 1px solid ${tokens.border.color};
    border-collapse: collapse;
    box-sizing: border-box;
    height: ${`${height}px`};
    overflow: ${hasInfiniteLoader ? `hidden;` : `auto;`}
    width: ${`${width}px`};
    ${fontSize()}

    * {
      box-sizing: inherit;
    }
  `
);

export const ContentWrapper = styled.div`
  flex: 1;
  position: relative;
`;
