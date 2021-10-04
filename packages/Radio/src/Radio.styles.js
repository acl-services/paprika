import styled, { css } from "styled-components";
import { toInt, fontSizeValue, lineHeightValue, z } from "@paprika/stylers/lib/helpers";
import { boxSizingStyles, visuallyHidden } from "@paprika/stylers/lib/includes";
import tokens from "@paprika/tokens";
import types from "./types";

const getLabelLeftPadding = (radioSize, hasLabel) => hasLabel ? `${toInt(radioSize) + toInt(tokens.space)}px` : radioSize;

const smallRadioSize = tokens.radio.sizeSm;
const mediumRadioSize = tokens.radio.sizeMd;
const largeRadioSize = tokens.radio.sizeLg;

const getHalfSizeCss = sizeCss => `${toInt(sizeCss) / 2}px`;
const smallRadioHalfSize = getHalfSizeCss(smallRadioSize);
const mediumRadioHalfSize = getHalfSizeCss(mediumRadioSize);
const largeRadioHalfSize = getHalfSizeCss(largeRadioSize);

const styles = {
  [types.size.SMALL]: {
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
    labelStyles: hasLabel => ({
        minHeight: smallRadioSize,
        padding: `0 0 0 ${getLabelLeftPadding(smallRadioSize, hasLabel)}`,
      }),
  },
  [types.size.MEDIUM]: {
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
    labelStyles: hasLabel => ({
        minHeight: mediumRadioSize,
        padding: `1px 0 0 ${getLabelLeftPadding(mediumRadioSize, hasLabel)}`,
      }),
  },
  [types.size.LARGE]: {
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
    labelStyles: hasLabel => ({
        minHeight: largeRadioSize,
        padding: `3px 0 0 ${getLabelLeftPadding(largeRadioSize, hasLabel)}`,
      }),
  },
};

export const Radio = styled.div(
  ({ size, hasLabel }) => css`
    ${boxSizingStyles};
    ${styles[size].baseFontSize};
    ${z(0)};
    line-height: ${hasLabel ? lineHeightValue(-1) : "0"};
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
        ${styles[size].labelStyles(hasLabel)};
        position: relative;
      }

      & + label::before,
      & + label > .radio-icon {
        position: absolute;
        top: 0;
      }

      & + label::before {
        ${styles[size].radioStyles};
        ${z(1)};
        background: ${tokens.color.white};
        border: 2px solid ${tokens.border.color};
        content: "";
        left: 0;
      }

      & + label:hover::before {
        border: 2px solid ${tokens.color.black};
      }

      & + label > .radio-icon {
        ${styles[size].radioIconStyles};
        ${z(2)};
        color: ${tokens.color.black};
        opacity: 0;
        pointer-events: none;
        transform: translateX(-50%);
        transition: opacity 0.15s ease-out;
      }

      & + label > .radio-solid-background {
        ${styles[size].radioIconBackgroundStyles};
        background-color: ${tokens.color.black};
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
  `
);
