import { css } from "styled-components";
import { toInt, fontSizeValue, lineHeightValue, z } from "@paprika/stylers/lib/helpers";
import { boxSizingStyles, visuallyHidden } from "@paprika/stylers/lib/includes";
import tokens from "@paprika/tokens";
import * as types from "./types";

const getLabelLeftPadding = (radioSize, hasLabel) => {
  return hasLabel ? `${toInt(radioSize) + toInt(tokens.space)}px` : radioSize;
};

const smallRadioSize = tokens.radio.sizeSm;
const mediumRadioSize = tokens.radio.sizeMd;
const largeRadioSize = tokens.radio.sizeLg;

const getHalfSizeCss = sizeCss => `${toInt(sizeCss) / 2}px`;
const smallRadioHalfSize = getHalfSizeCss(smallRadioSize);
const mediumRadioHalfSize = getHalfSizeCss(mediumRadioSize);
const largeRadioHalfSize = getHalfSizeCss(largeRadioSize);

const styles = {
  [types.SMALL]: {
    baseFontSize: {
      fontSize: `${fontSizeValue(-1)}px`,
    },
    radioStyles: {
      height: smallRadioSize,
      width: smallRadioSize,
      borderRadius: smallRadioHalfSize,
    },
    radioIconBackgroundStyles: {
      borderRadius: "4px",
      height: "8px",
      top: "4px",
      width: "8px",
    },
    radioIconStyles: {
      fontSize: `${fontSizeValue(-4)}px`,
      height: smallRadioSize,
      left: smallRadioHalfSize,
    },
    labelStyles: hasLabel => {
      return {
        minHeight: smallRadioSize,
        padding: `0 0 0 ${getLabelLeftPadding(smallRadioSize, hasLabel)}`,
      };
    },
  },
  [types.MEDIUM]: {
    baseFontSize: {
      fontSize: `${fontSizeValue()}px`,
    },
    radioStyles: {
      height: mediumRadioSize,
      width: mediumRadioSize,
      borderRadius: mediumRadioHalfSize,
    },
    radioIconBackgroundStyles: {
      borderRadius: "6px",
      height: "10px",
      top: "5px",
      width: "10px",
    },
    radioIconStyles: {
      fontSize: `${fontSizeValue(-2)}px`,
      height: mediumRadioSize,
      left: mediumRadioHalfSize,
    },
    labelStyles: hasLabel => {
      return {
        minHeight: mediumRadioSize,
        padding: `1px 0 0 ${getLabelLeftPadding(mediumRadioSize, hasLabel)}`,
      };
    },
  },
  [types.LARGE]: {
    baseFontSize: {
      fontSize: `${fontSizeValue()}px`,
    },
    radioStyles: {
      height: largeRadioSize,
      width: largeRadioSize,
      borderRadius: largeRadioHalfSize,
    },
    radioIconBackgroundStyles: {
      borderRadius: "6px",
      height: "12px",
      top: "6px",
      width: "12px",
    },
    radioIconStyles: {
      fontSize: `${fontSizeValue()}px`,
      height: largeRadioSize,
      left: largeRadioHalfSize,
    },
    labelStyles: hasLabel => {
      return {
        minHeight: largeRadioSize,
        padding: `3px 0 0 ${getLabelLeftPadding(largeRadioSize, hasLabel)}`,
      };
    },
  },
};

const radioStyles = css`
  ${boxSizingStyles};
  ${({ size }) => styles[size].baseFontSize};
  line-height: ${({ hasLabel }) => (hasLabel ? lineHeightValue(-1) : "0")};
  position: relative;

  & + [data-pka-anchor="radio"] {
    margin-top: ${tokens.space};
  }

  input[type="radio"] {
    ${visuallyHidden};

    & + label {
      cursor: pointer;
      display: inline-block;
      margin: 0;
      ${({ size, hasLabel }) => styles[size].labelStyles(hasLabel)};
      position: relative;
    }

    & + label::before,
    & + label > .radio-icon {
      position: absolute;
      top: 0;
    }

    & + label::before {
      background: ${tokens.color.white};
      border: 2px solid ${tokens.border.color};
      content: "";
      left: 0;
      ${z(1)};
      ${({ size }) => styles[size].radioStyles};
    }

    & + label:hover::before {
      border: 2px solid ${tokens.color.black};
    }

    & + label > .radio-icon {
      color: ${tokens.color.black};
      ${({ size }) => styles[size].radioIconStyles};
      opacity: 0;
      pointer-events: none;
      transform: translateX(-50%);
      transition: opacity 0.15s ease-out;
      ${z(2)};
    }

    & + label > .radio-solid-background {
      background-color: ${tokens.color.black};
      ${({ size }) => styles[size].radioIconBackgroundStyles};
    }

    &:checked {
      & + label.deselectable:hover:before {
        background: ${tokens.color.blackLighten60};
      }
      & + label::before {
        border: 2px solid ${tokens.color.black};
      }
    }

    &:checked + label > [data-pka-anchor="radio.icon.check"] {
      opacity: 1;
    }

    &:disabled {
      & + label,
      & ~ .radio-icon {
        cursor: not-allowed;
        opacity: 0.5;
        transition: none;
      }
      &:checked {
        & + label:hover::before {
          border: 2px solid ${tokens.color.black};
        }
        & + label.deselectable:hover:before {
          background-color: inherit;
        }
      }
      & + label:hover::before {
        border: 2px solid ${tokens.color.blackLighten60};
      }
    }

    &:focus + label::before {
      border-color: ${tokens.highlight.active.noBorder.borderColor};
      box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
    }
  }
`;

export default radioStyles;
