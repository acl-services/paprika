import styled, { css } from "styled-components";

export const Text = styled.span(({ maxColumnWidth = "100%" }) => {
  return css`
    align-items: center;
    border: 1px solid cyan;
    display: inline-flex;
    height: 100%;
    max-width: ${maxColumnWidth}px;
  `;
});

export const Ellipsis = styled.span(() => {
  return css`
    border: 1px solid pink;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  `;
});
