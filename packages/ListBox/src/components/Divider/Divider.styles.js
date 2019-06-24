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
  display: flex;
  color: #717171;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  padding: 4px;

  &:before {
    ${pseudoElement}
    margin-right: 8px;
  }

  &:after {
    ${pseudoElement}
    margin-left: 8px;
  }
`;
