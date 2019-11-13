import { css } from "styled-components";

import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const FontSizes = {
  small: stylers.fontSize(-2),
  medium: stylers.fontSize(-1),
  large: stylers.fontSize(0),
};

export const inlineContainerStyles = css`
  flex-grow: 1;
`;

const inlineFormElementStyles = css`
  align-items: baseline;
  display: flex;
`;

export const formElementChildStyle = css`
  margin: ${tokens.space} 0;
`;

const formElementStyles = css`
  ${({ size }) => FontSizes[size]}

  ${({ isInline }) => isInline && inlineFormElementStyles};

  ${({ isDisabled }) => isDisabled && `opacity: 0.5;`}
`;

export default formElementStyles;
