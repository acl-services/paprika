import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const selectStyles = () => `
.form-select__aria-label {
  ${stylers.visuallyHidden}
}

.form-select {
  position: relative;
  &:hover:not(.is-disabled):not(.is-readonly):not([disabled]) {
    border-color: ${tokens.color.blackLighten30};
  }
}

.form-select__select {
  ${stylers.selectArrow()}
  ${stylers.formDisabled(stylers.selectArrow(tokens.color.blackLighten30))}

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

  -webkit-appearance: none;
  -moz-appearance: none;

  // Sizes

  &.form-select--small  {
    ${stylers.fontSize(-2)}
    height: ${stylers.spacer(3)};
  }

  &.form-select--medium  {
    ${stylers.fontSize(-1)}
    height: ${stylers.spacer(4)};
  }

  &.form-select--large  {
    ${stylers.fontSize()}
    height: ${stylers.spacer(5)};
  }

  &.form-element--has-error  {
    border-color: ${tokens.color.orange};
  }

  &:focus  {
    background-color: ${tokens.color.white};
    border-color: ${tokens.highlight.active.noBorder.borderColor};
    box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
  }

  &.is-readonly {
    @include form-readonly;
    cursor: default;
    pointer-events: none;
  }

  &.form-select--placeholder  {
    @include placeholder;
  }

  &.form-select--placeholder.is-readonly &[disabled] {
    color: ${tokens.color.black};
  }
}

`;

export default selectStyles;
