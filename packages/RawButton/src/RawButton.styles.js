import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const focusStyle = tokens.highlight.active.withBorder.boxShadow;
const insetFocusStyle = tokens.highlight.active.withBorder.insetBoxShadow;

const focusStyles = isInset => `
  &:focus {
    box-shadow: ${isInset ? insetFocusStyle : focusStyle};
    outline: none;
  }
`;

const disabledStyles = `
  cursor: not-allowed;

  &:focus {
    box-shadow: none;
  }
`;

const rawButtonStyles = props => `
  ${stylers.inlineBlockStyle};
  cursor: pointer;
  ${focusStyles(props.hasInsetFocusStyle)};
  ${props.isDisabled && disabledStyles};
`;

export default rawButtonStyles;
