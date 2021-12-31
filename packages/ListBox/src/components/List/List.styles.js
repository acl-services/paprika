import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const List = styled.ul(
  ({ noResultsFound, height, hasOptions }) => css`
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    max-height: ${stylers.cssValue(height)};
    overflow: auto;
    ${noResultsFound || !hasOptions ? `padding: 0 ${tokens.space};` : `padding: 0;`}

    &:focus {
      outline: none;
    }

    li {
      box-sizing: border-box;
    }
  `
);
