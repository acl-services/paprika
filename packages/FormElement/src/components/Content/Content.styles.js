import styled, { css } from "styled-components";

const inlineContentStyles = css`
  align-items: baseline;
  display: flex;
`;

export const Content = styled.div(
  ({ isInline }) => css`
    ${isInline && inlineContentStyles};
  `
);
