import styled, { css } from "styled-components";

const isInlineCSS = `
  box-shadow: 0 0 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 0;
`;

export const Box = styled.div(
  ({ isInline, triggerWidth }) => css`
    background-color: #ffffff;
    border: 1px solid #d7d7d7;
    border-radius: 3px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.07), 0px 7px 17px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 0;

    ${isInline && isInlineCSS}
    ${triggerWidth ? `width: ${triggerWidth}px;` : ""};
  `
);
