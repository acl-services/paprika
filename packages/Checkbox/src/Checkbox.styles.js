import { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const size = stylers.spacer(3);
const fontSize = `${stylers.fontSizeValue(2)}px`;

const getTopOffset = () => `${(Number.parseInt(stylers.fontSizeValue(), 10) * stylers.lineHeightValue()) / 2}px`;

export const checkboxStyles = css`
  &,
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ${stylers.fontSize()}
  ${stylers.lineHeight()}

  position: relative;

  input[type="checkbox"] {
    display: block;
    height: 0;
    margin: 0;
    visibility: hidden;
    width: 0;
  }

  [type="checkbox"] + label {
    cursor: pointer;
    padding-left: ${Number.parseInt(size, 10) + Number.parseInt(tokens.spaceSm, 10)}px;
    position: relative;
  }

  [type="checkbox"] + label::before,
  [type="checkbox"] ~ [data-pka-anchor="checkbox.icon"] {
    top: ${getTopOffset()};
  }

  [type="checkbox"] + label::before {
    content: "";
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    background: ${tokens.color.white};
    height: ${size};
    left: 0;
    position: absolute;
    transform: translateY(-50%);
    width: ${size};
    z-index: 1;
  }

  [type="checkbox"] ~ [data-pka-anchor="checkbox.icon"] {
    font-size: ${fontSize};

    color: ${tokens.color.blue};
    left: ${Number.parseInt(size, 10) / 2}px;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s ease-in;
    z-index: 2;
  }

  [type="checkbox"]:checked ~ [data-pka-anchor="checkbox.icon"] {
    opacity: 1;
  }

  [type="checkbox"]:disabled {
    & + label,
    & ~ [data-pka-anchor="checkbox.icon"] {
      opacity: 0.5;
      transition: none;
    }
    & + label::before {
      background-color: ${tokens.color.blackLighten70};
    }
  }
`;

export const labelStyles = css`
  display: inline-block;
`;
