import styled from "styled-components";

export const ListWrapper = styled.ul`
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  overflow: auto;

  &:focus {
    outline: none;
  }

  li {
    box-sizing: border-box;
  }

  padding: 8px;
  ${props => {
    const paddingNoResults = props.noResultsFound ? "padding: 0" : "";
    return `
        max-height: ${props.height}px
        ${paddingNoResults}
      `;
  }}
`;
