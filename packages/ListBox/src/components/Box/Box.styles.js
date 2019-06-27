import styled from "styled-components";

const isInlineCSS = `
  box-shadow: 0 0 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 0;
`;

export const BoxContainerStyled = styled.div`
  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.07), 0px 7px 17px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 0;

  ${props => {
    const inlineCSS = props.isInline ? isInlineCSS : "";
    const widthCSS = props.triggerWidth ? `width: ${props.triggerWidth}px;` : "";
    return `
    ${widthCSS}
    ${inlineCSS}
    `;
  }}
`;
