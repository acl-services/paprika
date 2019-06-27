import styled from "styled-components";

const ListStyled = styled.ul`
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  overflow: auto;

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

export default ListStyled;
