import styled from "styled-components";

export const ListBoxContainerStyled = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 3px;
  border: 1px solid #d7d7d7;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.07), 0px 7px 17px rgba(0, 0, 0, 0.1);
  padding: 0;

  ${props => {
    const width = props.triggerWidth ? `width: ${props.triggerWidth}px` : "";
    return `
    ${width}
    `;
  }}
`;

export const ListBoxStyled = styled.ul`
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 8px;

  li {
    box-sizing: border-box;
  }

  overflow: auto;
  ${props => {
    const paddingNoResults = props.hasNoResults ? "padding: 0" : "";
    return `
        max-height: ${props.height}px
        ${paddingNoResults}
      `;
  }}
`;
