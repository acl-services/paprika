import { css } from "styled-components";

const pseudoElement = `
  background: #d7d7d7;
  content: "";
  display: inline-block;
  flex-grow: 1;
  height: 1px;
`;

// css let the IDE recognize css highlight
export const dividerCSS = css`
  align-items: center;
  color: #717171;
  display: flex;
  font-size: 12px;
  justify-content: center;
  padding: 4px;
  width: 100%;

  &:before {
    ${pseudoElement}
    margin-right: 8px;
  }

  &:after {
    ${pseudoElement}
    margin-left: 8px;
  }
`;
