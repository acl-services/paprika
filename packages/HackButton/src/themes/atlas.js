import { css } from "styled-components";
import * as types from "../types";

const focusBorderStyles = css`
  border-color: #276cf5;
  box-shadow: 0 0 0 2px #99cbfc;
`;

const kindStyles = {
  [types.DEFAULT]: css`
    background-color: transparent;
    border-color: transparent;
    color: #5d7599;
    &:hover {
      background-color: #ebeef2;
    }
    &:active {
      background-color: #e6e6e6;
    }
  `,
  [types.PRIMARY]: css`
    background-color: #5d7599;
    border-color: transparent;
    color: #ffffff;
    &:hover {
      background-color: #455772;
    }
    &:active {
      background-color: #37465b;
    }
  `,
  [types.SECONDARY]: css`
    background-color: #ffffff;
    border-color: #385f99;
    color: #385f99;
    &:hover {
      background-color: #ebeef2;
    }
    &:active {
      background-color: #e6e6e6;
    }
  `,
};

const sizeStyles = {
  [types.SMALL]: css`
    height: 24px;
  `,
  [types.MEDIUM]: css`
    height: 40px;
  `,
  [types.LARGE]: css`
    height: 56px;
  `,
};

export const Button = {
  Button: ({ size, kind }) => css`
    ${sizeStyles[size]};
    ${kindStyles[kind]};
    border-radius: 2px;
    border-style: solid;
    cursor: pointer;
    font-weight: 700;
    line-height: 16px;
    padding-left: 12px;
    padding-right: 12px;

    &:focus {
      outline: none;
    }

    html:not([data-whatinput="mouse"]) &:focus,
    &[data-has-forced-focus]:focus {
      ${focusBorderStyles}
    }
  `,
};
