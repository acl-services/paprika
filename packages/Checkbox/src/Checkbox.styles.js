import { css } from "styled-components";
import { toInt, fontSizeValue, lineHeightValue, z } from "@paprika/stylers/lib/helpers";
import { boxSizingStyles, visuallyHidden } from "@paprika/stylers/lib/includes";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import tokens from "@paprika/tokens";

const getLabelLeftPadding = (checkboxSize, hasLabel) => {
  return hasLabel ? `${toInt(checkboxSize) + toInt(tokens.space)}px` : checkboxSize;
};

const smallCheckboxSize = tokens.checkbox.sizeSm;
const mediumCheckboxSize = tokens.checkbox.sizeMd;
const largeCheckboxSize = tokens.checkbox.sizeLg;

const styles = {
  [ShirtSizes.SMALL]: {
    baseFontSize: {
      fontSize: `${fontSizeValue(-1)}px`,
    },
    checkBoxStyles: {
      height: smallCheckboxSize,
      width: smallCheckboxSize,
    },
    checkBoxIconStyles: {
      fontSize: `${fontSizeValue(-3)}px`,
      height: smallCheckboxSize,
      left: `${toInt(smallCheckboxSize) / 2}px`,
    },
    labelStyles: hasLabel => {
      return {
        minHeight: smallCheckboxSize,
        padding: `0 0 0 ${getLabelLeftPadding(smallCheckboxSize, hasLabel)}`,
      };
    },
  },
  [ShirtSizes.MEDIUM]: {
    baseFontSize: {
      fontSize: `${fontSizeValue()}px`,
    },
    checkBoxStyles: {
      height: mediumCheckboxSize,
      width: mediumCheckboxSize,
    },
    checkBoxIconStyles: {
      fontSize: `${fontSizeValue(-1)}px`,
      height: mediumCheckboxSize,
      left: `${toInt(mediumCheckboxSize) / 2}px`,
    },
    labelStyles: hasLabel => {
      return {
        minHeight: mediumCheckboxSize,
        padding: `1px 0 0 ${getLabelLeftPadding(mediumCheckboxSize, hasLabel)}`,
      };
    },
  },
  [ShirtSizes.LARGE]: {
    baseFontSize: {
      fontSize: `${fontSizeValue()}px`,
    },
    checkBoxStyles: {
      height: largeCheckboxSize,
      width: largeCheckboxSize,
    },
    checkBoxIconStyles: {
      fontSize: `${fontSizeValue()}px`,
      height: largeCheckboxSize,
      left: `${toInt(largeCheckboxSize) / 2}px`,
    },
    labelStyles: hasLabel => {
      return {
        minHeight: largeCheckboxSize,
        padding: `3px 0 0 ${getLabelLeftPadding(largeCheckboxSize, hasLabel)}`,
      };
    },
  },
};

const checkboxStyles = css`
  ${boxSizingStyles};
  ${({ size }) => styles[size].baseFontSize};
  line-height: ${({ hasLabel }) => (hasLabel ? lineHeightValue(-1) : "0")};
  margin: ${tokens.space} 0;
  position: relative;

  input[type="checkbox"] {
    ${visuallyHidden};

    &:focus + label::before {
      box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
      border-color: ${tokens.highlight.active.noBorder.borderColor};
    }

    & + label {
      cursor: pointer;
      display: inline-block;
      margin: 0;
      ${({ size, hasLabel }) => styles[size].labelStyles(hasLabel)};
      position: relative;
    }

    & + label::before,
    & + label > .checkbox-icon {
      position: absolute;
      top: 0;
    }

    & + label::before {
      background: ${tokens.color.white};
      border: 2px solid ${tokens.border.color};
      border-radius: ${tokens.border.radius};
      content: "";
      left: 0;
      ${z(1)};
      ${({ size }) => styles[size].checkBoxStyles};
    }

    & + label:hover::before {
      border: 2px solid ${tokens.color.black};
    }

    & + label > .checkbox-icon {
      color: ${tokens.color.white};
      ${({ size }) => styles[size].checkBoxIconStyles};
      opacity: 0;
      pointer-events: none;
      transform: translateX(-50%);
      transition: opacity 0.15s ease-out;
      ${z(2)};
    }

    &:checked,
    &:indeterminate {
      & + label::before {
        background: ${tokens.color.black};
        border: none;
      }
      & + label:hover::before {
        background: ${tokens.color.blackLighten30};
      }
    }

    &:checked + label > [data-pka-anchor="checkbox.icon.check"] {
      opacity: 1;
    }

    &:indeterminate + label > [data-pka-anchor="checkbox.icon.check"] {
      opacity: 0;
    }

    &:indeterminate + label > [data-pka-anchor="checkbox.icon.indeterminate"] {
      opacity: 1;
    }

    &:disabled {
      & + label,
      & ~ .checkbox-icon {
        cursor: not-allowed;
        opacity: 0.5;
        transition: none;
      }
      &:checked,
      &:indeterminate {
        & + label::before {
          background-color: ${tokens.color.blackLighten40};
        }
        & + label:hover::before {
          border: none;
        }
      }
      & + label:hover::before {
        border: 2px solid ${tokens.border.color};
      }
    }
  }
`;

export default checkboxStyles;
