import { css } from "styled-components";
// import tokens from "@paprika/tokens";
// import stylers from "@paprika/stylers";

export const checkboxStyles = css`
  input[type="checkbox"] {
    display: block;
    height: 0;
    margin: 0;
    visibility: hidden;
    width: 0;
  }
`;

export const labelStyles = css`
  label {
    display: inline-block;
    height: 30px;
    line-height: 30px;
  }
`;
