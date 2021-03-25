import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

export const List = styled.ul(({ noResultsFound, height, hasOptions, $virtualize }) => {
  const ulStyles = `
      box-sizing: border-box;
      list-style: none;
      margin: 0;
      max-height: ${height}px;
      overflow: auto;
      ${noResultsFound || !hasOptions ? "padding: 0;" : `padding: ${tokens.space};`}

      &:focus {
        outline: none;
      }

      li {
        box-sizing: border-box;
      }    
    `;

  return css`
    ${$virtualize
      ? `
        & ul {
          margin: 0;
          padding: 4px;
          box-sizing: border-box;
          list-style: none;
          &:focus {
            outline: none;
          }
          
          [data-pka-anchor="list-box.divider"] {
            padding: 0;
          }

          li {
            display: flex;
            align-items: center;
            padding: 0 4px;
            box-sizing:border-box;
          }

          ${noResultsFound || !hasOptions ? "padding: 0;" : `padding: ${tokens.space};`}
        }
      `
      : ulStyles}
  `;
});
