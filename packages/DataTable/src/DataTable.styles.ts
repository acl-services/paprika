import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { fontSize } from "@paprika/stylers/lib/helpers";

export const Table = styled.div<{
  width: string | number;
  height: number;
}>(
  ({ width, height }) => css`
    border: 1px solid ${tokens.border.color};
    border-collapse: collapse;
    box-sizing: border-box;
    height: ${`${height}px`};
    overflow: hidden;
    width: ${typeof width === "string" ? width : `${width}px`};
    ${fontSize()}

    * {
      box-sizing: inherit;
    }
  `
);
