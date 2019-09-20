import { css } from "styled-components";
import tokens from "@paprika/tokens";

const svgString = color =>
  `<svg color='${color}' width='32' height='32' xmlns='http://www.w3.org/2000/svg'><path fill='currentColor' d='M29.839 10.107q0 0.714-0.5 1.214l-15.357 15.357q-0.5 0.5-1.214 0.5t-1.214-0.5l-8.893-8.893q-0.5-0.5-0.5-1.214t0.5-1.214l2.429-2.429q0.5-0.5 1.214-0.5t1.214 0.5l5.25 5.268 11.714-11.732q0.5-0.5 1.214-0.5t1.214 0.5l2.429 2.429q0.5 0.5 0.5 1.214z'></path></svg>`;

const checkboxTick = (color = tokens.color.green) => `
  background-image: url("data:image/svg+xml;base64,${btoa(svgString(color))}");
`;

export const checkboxStyles = css`
  input[type="checkbox"] {
    display: block;
    height: 0;
    margin: 0;
    visibility: hidden;
    width: 0;
  }

  [type="checkbox"] + label {
    cursor: pointer;
    padding-left: 36px;
    position: relative;
  }

  [type="checkbox"] + label::before,
  [type="checkbox"] + label::after {
    content: "";
    height: 30px;
    left: 0;
    position: absolute;
    top: 0;
    width: 30px;
  }
  [type="checkbox"] + label::before {
    background: ${tokens.color.white};
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    z-index: 1;
  }

  [type="checkbox"] + label::after {
    ${checkboxTick()}
    background-position: 55% 55%;
    background-repeat: no-repeat;
    background-size: 75% auto;
    transition: opacity 0.2s ease-out;
    z-index: 2;
  }

  [type="checkbox"]:disabled + label {
    opacity: 0.66;
  }
  [type="checkbox"]:disabled + label::before {
    background-color: darken(${tokens.color.white}, 10%);
  }

  [type="checkbox"]:not(:checked) + label::after {
    opacity: 0;
  }
  [type="checkbox"]:checked + label::after {
    opacity: 1;
  }
`;

export const labelStyles = css`
  display: inline-block;
  height: 30px;
  line-height: 30px;
`;
