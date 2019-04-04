import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const textareaStyles = () => `
  position: relative;
  &:hover:not(.is-disabled):not(.is-readonly):not([disabled]) {
    border-color: ${tokens.color.blackLighten30};
  }

  &.is-readonly {
    cursor: text;
  }

  .aclui-form-textarea__textarea {
    // @include placeholders;
    // @include form-disabled;

    background-color: ${tokens.color.white};
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    box-shadow: none;
    box-sizing: border-box;
    color: ${tokens.color.black};
    display: block;
    margin: 0;
    min-height: 80px;
    padding: ${tokens.space};
    resize: none;
    width: 100%;

    .aclui-form-element--has-error & {
      border-color: ${tokens.color.orange};
    }

    &:focus {
      background-color: ${tokens.color.white};
      border-color: ${tokens.highlight.active.noBorder.borderColor};
      box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
      outline: none;
    }

    // Sizes
    .aclui-form-textarea--small & {
      font-size: ${stylers.fontSize(-2)};
    }

    .aclui-form-textarea--medium & {
      font-size: ${stylers.fontSize(-1)};
    }

    .aclui-form-textarea--large & {
      font-size: ${stylers.fontSize()};
    }

    .is-readonly & {
      // @include form-readonly;
      cursor: text;
    }
  }

  .aclui-form-textarea__aria-label {
    ${stylers.visuallyHidden}
  }
`;

export default textareaStyles;
