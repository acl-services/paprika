import { css } from "styled-components";

import stylers from "@paprika/stylers";

const FontSizes = {
  small: stylers.fontSize(-2),
  medium: stylers.fontSize(-1),
  large: stylers.fontSize(0),
};

const inlineFormElementStyles = css`
  align-items: baseline;
  display: flex;
`;

const formElementStyles = css`
  ${({ size }) => FontSizes[size]}

  ${({ isInline }) => isInline && inlineFormElementStyles};

  ${({ isDisabled }) => isDisabled && `opacity: 0.5;`}
`;

export default formElementStyles;
