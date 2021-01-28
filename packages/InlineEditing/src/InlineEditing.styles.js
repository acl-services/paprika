import styled, { css } from "styled-components";

export const Visible = styled.div(({ isVisible }) => {
  return isVisible
    ? ""
    : css`
        /* Reason we don't want to destroy the react reference when is on editing mode */
        height: 1px;
        left: 0;
        position: absolute;
        top: 0;
        visibility: hidden;
        width: 1px;
      `;
});
