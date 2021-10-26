import { css } from "styled-components";
import * as types from "../types";

const focusBorderStyles = css`
  border-color: #276cf5;
  box-shadow: 0 0 0 2px #99cbfc;
`;

const coloredButtonStyles = css`
  color: #ffffff;
  text-decoration: none;
  text-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
`;

const kindStyles = {
  [types.DEFAULT]: css`
    background-color: #ffffff;
    background-image: linear-gradient(#fcfcfc, #f0f0f0);
    border-color: #d7d7d7;
    color: #3f3d3c;
    text-decoration: none;
    &:hover {
      background: #f0f0f0;
    }
  `,
  [types.PRIMARY]: css`
    ${coloredButtonStyles}
    background-color: #5db187;
    background-image: linear-gradient(#5db187, #42996d);
    border-color: #42996d;
    &:hover {
      background: #42996d;
    }
  `,
  [types.SECONDARY]: css`
    ${coloredButtonStyles}
    background-color: #9884c5;
    background-image: linear-gradient(#9884c5, #785cba);
    border-color: #785cba;
    &:hover {
      background: #785cba;
    }
  `,
};

const sizeStyles = {
  [types.SMALL]: css`
    font-size: 13px;
    min-height: 23px;
    padding: 3px 8px;
  `,
  [types.MEDIUM]: css`
    font-size: 14px;
    min-height: 26px;
    padding: 6.5px 12px;
  `,
  [types.LARGE]: css`
    font-size: 16px;
    min-height: 29px;
    padding: 9px 20px;
  `,
};

export const Button = {
  Button: ({ size, kind }) => css`
    ${kindStyles[kind]}
    ${sizeStyles[size]}
    align-items: center;
    appearance: none;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font-weight: bold;
    justify-content: center;
    line-height: 1.24;
    text-align: center;

    &:active {
      transform: scale(0.98);
    }

    &:focus {
      outline: none;
    }

    html:not([data-whatinput="mouse"]) &:focus,
    &[data-has-forced-focus]:focus {
      ${focusBorderStyles}
    }
  `,
};
