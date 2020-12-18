import styled, { css } from "styled-components";

export const List = styled.ul(
  ({ noResultsFound, height, hasOptions }) => css`
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    max-height: ${height}px;
    overflow: auto;

    &:focus {
      outline: none;
    }

    li {
      box-sizing: border-box;
    }

    ${noResultsFound || !hasOptions ? "padding: 0" : "padding: 8px;"}
  `
);
