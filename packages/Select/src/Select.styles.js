import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const svgString = color =>
  `<svg color='${color}' width='18' height='32' xmlns='http://www.w3.org/2000/svg'><path fill='currentColor' d='M18.286 12.571q0 0.464-0.339 0.804l-8 8q-0.339 0.339-0.804 0.339t-0.804-0.339l-8-8q-0.339-0.339-0.339-0.804t0.339-0.804 0.804-0.339h16q0.464 0 0.804 0.339t0.339 0.804z'></path></svg>`;

const selectArrow = (color = tokens.color.black) => `
  background-image: url("data:image/svg+xml;base64,${btoa(svgString(color))}");
`;

export const Select = styled.div`
  position: relative;

  .form-select__select {
    ${selectArrow()}
    appearance: none;
    background-color: ${tokens.color.white};
    background-position: right 11px center;
    background-repeat: no-repeat;
    background-size: 9px auto;
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    box-shadow: none;
    box-sizing: border-box;
    color: ${tokens.color.black};
    display: block;
    line-height: 1;
    margin: 0;
    outline: none;
    padding: 0 ${stylers.spacer(3)} 0 ${stylers.spacer(1)};
    width: 100%;

    &:hover:not(.is-disabled):not(.is-readonly):not([disabled]) {
      border-color: ${tokens.color.blackLighten30};
    }

    &:focus  {
      background-color: ${tokens.color.white};
      border-color: ${tokens.highlight.active.noBorder.borderColor};
      box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
    }
  }

  &.form-select--small .form-select__select {
    ${stylers.fontSize(-2)}
    height: ${stylers.spacer(3)};
  }

  &.form-select--medium .form-select__select {
    ${stylers.fontSize(-1)}
    height: ${stylers.spacer(4)};
  }

  &.form-select--large .form-select__select {
    ${stylers.fontSize()}
    height: ${stylers.spacer(5)};
  }

  &.form-select--placeholder .form-select__select {
    ${stylers.placeholder}

    option {
      color: ${tokens.color.black};
      font-style: normal;

      &:first-child {
        color: inherit;
        font-style: inherit;
      }
    }
  }

  &.form-select--is-disabled .form-select__select {
    ${stylers.disabledFormStyles}
    ${selectArrow(tokens.color.blackLighten60)}
  }

  &.form-select--is-readonly .form-select__select {
    ${stylers.readOnlyFormStyles}
  }

  &.form-select--has-error .form-select__select {
    ${stylers.errorFormStyles}
  }
`;
