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

const commonStyles = styled.div`
  border: none;
  padding: 0;
`;

export const FormElement = styled(commonStyles)`
  ${props => {
    const size = FontSizes[props.size];
    const isInline = props.isInline && inlineFormElementStyles;
    const isDisabled = props.isDisabled && `opacity: 0.5;`;

    return `
    ${size};
    ${isInline};
    ${isDisabled};`;
  }}
`;
