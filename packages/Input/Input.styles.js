import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const inputStyles = () => `
position: relative;
.form-input__input {
  box-sizing: border-box;
  display: block;
  line-height: normal;
  width: 100%;

  .form-input--has-icon & {
    padding-left: ${stylers.spacer(3)};
  }

  .form-element--has-error & {
    border-color: ${tokens.orange};
  }

  &:focus {
    box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
    outline: none;
  }

  &::-ms-clear {
    display: none;
  }
}

// TODO: consolidate these when possible
input.form-input__input {
  ${stylers.placeholders}
  ${stylers.formDisabled}
  background-color: ${tokens.white};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  box-shadow: none;
  color: ${tokens.color.black};
  margin: 0;
  padding: 0 ${stylers.spacer(3)} 0 ${tokens.space};
  transition: box-shadow 0.2s, color 0.2s;

  // Sizes

  .form-input--small & {
    font-size: ${stylers.fontSize(-2)};
    height: ${stylers.spacer(3)};
  }

  .form-input--medium & {
    font-size: ${stylers.fontSize(-1)};
    height: ${stylers.spacer(4)};
  }

  .form-input--large & {
    font-size: ${stylers.fontSize()};
    height: ${stylers.spacer(5)};
  }

  &:focus {
    background-color: ${tokens.color.white};
    border-color: ${tokens.highlight.active.noBorder.borderColor};
  }

  .is-readonly &[readonly] {
    @include form-readonly;
    cursor: text;
  }
}

.form-input__icon,
.form-input__clear {
  ${stylers.formFaded}

  padding: 0 ${stylers.spacer(0.5)};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: ${stylers.z(1)};
}

.form-input__icon {
  left: 3px;
}

.form-input__clear {
  border-radius: ${tokens.border.radius};
  right: 3px;

  &:hover {
    i::before {
      color: ${tokens.color.blackLighten30};
    }
  }
}
`;

export default inputStyles;
