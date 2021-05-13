import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

export const List = styled.ul(
  ({ noResultsFound, height, hasOptions }) => css`
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    max-height: ${height}px;
    overflow: auto;
    ${noResultsFound || !hasOptions ? `padding: 0 ${tokens.space};` : `padding: ${tokens.space};`}

    &:focus {
      outline: none;
    }

    li {
      box-sizing: border-box;
    }
  `
);
