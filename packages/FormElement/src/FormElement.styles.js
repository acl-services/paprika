import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";

const FontSizes = {
  small: stylers.fontSize(-2),
  medium: stylers.fontSize(-1),
  large: stylers.fontSize(0),
};

export const Sections = styled.div(
  ({ isInline }) => css`
    ${isInline && `flex-grow: 1;`}
  `
);

const inlineFormElementStyles = css`
  align-items: baseline;
  display: flex;
`;

export const FormElement = styled.div(
  ({ size, isInline, isDisabled }) => css`
    ${FontSizes[size]}
    ${isInline && inlineFormElementStyles};
    ${isDisabled && `opacity: 0.5;`}
    border: none;
    padding: 0;
  `
);
