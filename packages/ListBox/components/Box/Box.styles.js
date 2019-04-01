import styled from "styled-components";

const isInlineDisplayCSS = `
  box-shadow: 0 0 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 0;
`;

export const BoxContainerStyled = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 3px;
  border: 1px solid #d7d7d7;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.07), 0px 7px 17px rgba(0, 0, 0, 0.1);
  padding: 0;

  ${props => {
    const isInlineDisplay = props.isInlineDisplay ? isInlineDisplayCSS : "";
    const width = props.triggerWidth ? `width: ${props.triggerWidth}px;` : "";
    return `
    ${width}
    ${isInlineDisplay}
    `;
  }}
`;
