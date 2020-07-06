import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";

const FontSizes = {
  small: stylers.fontSize(-2),
  medium: stylers.fontSize(-1),
  large: stylers.fontSize(0),
};

export const SectionsContainer = styled.div`
  ${props => `
  ${props.isInline && `flex-grow: 1;`}
  `}
`;

const inlineFormElementStyles = css`
  align-items: baseline;
  display: flex;
`;

export const FormElementWrapper = styled.div`
  border: none;
  padding: 0;

  ${props => `
    ${FontSizes[props.size]};
    ${props.isInline && inlineFormElementStyles};
    ${props.isDisabled && `opacity: 0.5;`};
  `}
`;
