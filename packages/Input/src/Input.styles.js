import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import * as types from "./types";

const iconStyles = {
  [types.SMALL]: css`
    ${stylers.fontSize(-2)}
    margin-left: 3px;
    padding: 0 ${tokens.spaceSm};
  `,
  [types.MEDIUM]: css`
    ${stylers.fontSize()}
    margin-left: 2px;
    padding: 0 ${tokens.spaceSm};
  `,
  [types.LARGE]: css`
    ${stylers.fontSize(2)}
    margin-left: ${tokens.spaceSm};
    padding: 0 ${tokens.spaceSm};
  `,
};

export const Input = styled.div(
  ({ hasClearButton, size }) => css`
  line-height: 1;
  position: relative;

  input.form-input__input {
    ${stylers.placeholders}

    background-color: ${tokens.color.white};
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    box-shadow: none;
    box-sizing: border-box;
    color: ${tokens.color.black};
    display: block;
    margin: 0;
    padding: 0 0 0 ${tokens.space};
    padding-right: ${hasClearButton ? stylers.spacer(3) : tokens.space};
    transition: box-shadow 0.2s, color 0.2s;
    width: 100%;

    &:focus {
      background-color: ${tokens.color.white};
      border-color: ${tokens.highlight.active.noBorder.borderColor};
      box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
      outline: none;
    }

    &::-ms-clear {
      display: none;
    }
  }

  input::-webkit-search-cancel-button {
    display: none;
  }

  /* Sizes */

  &.form-input--small input.form-input__input {
    ${stylers.fontSize(-2)}
    height: ${stylers.spacer(3)};
  }

  &.form-input--medium input.form-input__input {
    ${stylers.fontSize(-1)}
    height: ${stylers.spacer(4)};
  }

  &.form-input--large input.form-input__input {
    ${stylers.fontSize()}
    height: ${stylers.spacer(5)};
  }

  /* Icons */

  .form-input__icon,
  .form-input__clear {
    ${stylers.z(1)};
    color: ${tokens.textColor.icon};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .form-input__icon {
    ${iconStyles[size]};

    svg {
      vertical-align: middle;
    }
  }

  .form-input__clear {
    border-radius: ${tokens.border.radius};
    color: ${tokens.color.blackLighten50};
    right: ${tokens.spaceSm};
    transition: color 0.2s ease-out;

    &:hover {
      color: ${tokens.color.blackLighten30};
      background-color: transparent;
    }

    &:active {
      color: ${tokens.color.black};
      transition: none;
    }
  }

  &.form-input--has-icon input.form-input__input {
    padding-left: ${size === types.LARGE ? stylers.spacer(4) : stylers.spacer(3)};
  }

  /* Disabled */

  &.form-input--is-disabled,
  &[disabled] {
    input.form-input__input {
      ${stylers.disabledFormStyles}
    }

    .form-input__icon {
      color: ${tokens.color.blackLighten60};
    }
  }

  /* Read Only */

  &.form-input--is-readonly,
  &[readonly] {
    input.form-input__input {
      ${stylers.readOnlyFormStyles}
    }
  }

  /* Error */

  &.form-input--has-error input.form-input__input {
    ${stylers.errorFormStyles}
  }
`
);
