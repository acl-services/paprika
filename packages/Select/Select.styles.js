import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const selectStyles = props => `
.aclui-form-select__aria-label {
  ${stylers.visuallyHidden}
}

.aclui-form-select {
  position: relative;
  &:hover:not(.is-disabled):not(.is-readonly):not([disabled]) {
    border-color: ${tokens.color.blackLighten30};
  }
}

.aclui-form-select__select {
  ${stylers.selectArrow()}
  ${stylers.formDisabled(stylers.selectArrow(tokens.color.blackLighten30))}
  }

  background-color: ${tokens.color.white};

  //TODO FIX ALL BELOW HERE!!

  background-position: right 11px center;
  background-repeat: no-repeat;
  background-size: 9px auto;
  border: 1px solid $border--color;
  border-radius: $border--radius;
  box-shadow: none;
  box-sizing: border-box;
  color: $color--black;
  display: block;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 0 $space*3 0 $space;
  width: 100%;

  -webkit-appearance: none;
  -moz-appearance: none;

  // Sizes
  .aclui-form-select--small & {
    font-size: font-scale(-2);
    height: $space*3;
  }

  .aclui-form-select--medium & {
    font-size: font-scale(-1);
    height: $space*4;
  }

  .aclui-form-select--large & {
    font-size: font-scale();
    height: $space*5;
  }

  .aclui-form-element--has-error & {
    border-color: $color--orange;
  }

  &:focus {
    background-color: $color--white;
    border-color: $highlight--active--no-border--border-color;
    box-shadow: $highlight--active--no-border--box-shadow;
  }

  .is-readonly & {
    @include form-readonly;
    cursor: default;
    pointer-events: none;
  }

  .aclui-form-select--placeholder & {
    @include placeholder;
  }

  .aclui-form-select--placeholder.is-readonly &[disabled] {
    color: $color--black;
  }
}

`;

export default selectStyles;
