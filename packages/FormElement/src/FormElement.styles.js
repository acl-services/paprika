import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";

const FontSizes = {
  small: stylers.fontSize(-2),
  medium: stylers.fontSize(-1),
  large: stylers.fontSize(0),
};

export const SectionsContainer = styled.div`
  ${({ isInline }) => isInline && `flex-grow: 1;`}
`;

const inlineFormElementStyles = css`
  align-items: baseline;
  display: flex;
`;

export const FormElement = styled.div`
  ${({ size }) => FontSizes[size]}
  ${({ isInline }) => isInline && inlineFormElementStyles};
  ${({ isDisabled }) => isDisabled && `opacity: 0.5;`}
  border: none;
  padding: 0;
`;
