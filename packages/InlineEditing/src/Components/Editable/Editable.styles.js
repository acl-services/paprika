import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

export const CellOverflow = styled.div(({ hasError }) => {
  return css`
    ${hasError ? `box-shadow: inset 0 0 1px 2px ${tokens.color.orange}; background: white;` : ""};
    pointer-events: none;
    position: relative;
  `;
});

export const Edit = styled.div(({ rect }) => {
  return css`
    align-items: center;
    display: flex;
    height: ${rect.height}px;
    justify-content: center;
    width: ${rect.width}px;

    & > div {
      width: 100%;
    }
  `;
});

export const EditIcon = styled.div(() => {
  return css`
    align-items: center;
    display: flex;
    font-size: 20px;
    height: 100%;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
  `;
});

export const Card = styled.div(({ rect }) => {
  return css`
    background: ${tokens.color.white};
    border: 1px solid ${tokens.border.color};
    box-shadow: ${tokens.shadow};
    box-sizing: border-box;
    width: ${rect.width}px;
  `;
});
