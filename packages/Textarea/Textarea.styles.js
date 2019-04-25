import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const textareaStyles = () => `
  position: relative;

  &.aclui-form-textarea--small .aclui-form-textarea__textarea {
    ${stylers.fontSize(-2)};
  }

  &.aclui-form-textarea--medium .aclui-form-textarea__textarea {
    ${stylers.fontSize(-1)};
  }

  &.aclui-form-textarea--large .aclui-form-textarea__textarea {
    ${stylers.fontSize()};
  }

  &.is-readonly .aclui-form-textarea__textarea {
    ${stylers.formReadOnly};
    cursor: text;
  }

  .aclui-form-textarea__textarea {
    ${stylers.placeholders};
    ${stylers.formDisabled};

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

    &:hover:not(.is-disabled):not(.is-readonly):not([disabled]) {
      border-color: ${tokens.color.blackLighten30};
    }

    &.aclui-form-element--has-error {
      border-color: ${tokens.color.orange};
    }

    &:focus {
      background-color: ${tokens.color.white};
      border-color: ${tokens.highlight.active.noBorder.borderColor};
      box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
      outline: none;
    }
  }

  .aclui-form-textarea__aria-label {
    ${stylers.visuallyHidden}
  }
`;

export default textareaStyles;
