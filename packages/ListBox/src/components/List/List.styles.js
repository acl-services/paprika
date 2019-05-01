import styled from "styled-components";

const ListStyled = styled.ul`
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 8px;

  li {
    box-sizing: border-box;
  }

  overflow: auto;
  ${props => {
    const paddingNoResults = props.noResultsFound ? "padding: 0" : "";
    return `
        max-height: ${props.height}px
        ${paddingNoResults}
      `;
  }}
`;

export default ListStyled;
