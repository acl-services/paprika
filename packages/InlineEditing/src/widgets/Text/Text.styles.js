import styled, { css } from "styled-components";
import { size as sizeConstant } from "@paprika/constants";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import { isBlock } from "typescript";

export const Text = styled.span(({ columnWidth = null }) => {
  return css`
    ${columnWidth ? `width:${columnWidth}px` : ""};
    align-items: center;
    display: inline-flex;
    height: 100%;
    position: relative;
  `;
});

const fontSize = {
  [sizeConstant.SMALL]: () => `${stylers.fontSize(-2)}`,
  [sizeConstant.MEDIUM]: () => `${stylers.fontSize()}`,
  [sizeConstant.LARGE]: () => `${stylers.fontSize(2)}`,
};
export const Ellipsis = styled.span(({ size }) => {
  return css`
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    ${fontSize[size]()};
  `;
});

export const Input = styled.div(() => {
  return css`
    display: block;

    .text-inline-input > [data-pka-anchor="input"] {
      border: 0;
      border: 1px solid transparent;
      background: transparent;
    }

    .text-inline-input > [data-pka-anchor="input"]:focus {
      background-color: transparent;
      border-color: transparent;
      box-shadow: 0 0 0 0;
      outline: none;
    }
  `;
});
