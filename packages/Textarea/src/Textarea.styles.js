import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const textareaStyles = styled.div`
  position: relative;

  .form-textarea__textarea {
    ${stylers.placeholders};

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

    &.form-element--has-error {
      border-color: ${tokens.color.orange};
    }

    &:focus {
      background-color: ${tokens.color.white};
      border-color: ${tokens.highlight.active.noBorder.borderColor};
      box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
      outline: none;
    }
  }

  .form-textarea__aria-label {
    ${stylers.visuallyHidden}
  }

  &.form-textarea--small .form-textarea__textarea {
    ${stylers.fontSize(-2)};
  }

  &.form-textarea--medium .form-textarea__textarea {
    ${stylers.fontSize(-1)};
  }

  &.form-textarea--large .form-textarea__textarea {
    ${stylers.fontSize()};
  }

  &.form-textarea--is-readonly .form-textarea__textarea {
    ${stylers.readOnlyFormStyles};
    cursor: text;
  }

  &.form-textarea--is-disabled,
  &[disabled] {
    textarea.form-textarea__textarea {
      ${stylers.disabledFormStyles}
    }

    .form-textarea__icon {
      color: ${tokens.color.blackLighten60};
    }
  }

  &.form-textarea--has-error textarea.form-textarea__textarea {
    ${stylers.errorFormStyles}
  }
`;
