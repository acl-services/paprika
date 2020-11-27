import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";

const FontSizes = {
  small: stylers.fontSize(-2),
  medium: stylers.fontSize(-1),
  large: stylers.fontSize(0),
};

export const FormElement = styled.div(
  ({ size, isDisabled }) => css`
    ${FontSizes[size]}
    ${isDisabled && `opacity: 0.5;`}
    border: none;
    margin: 0;
    padding: 0;
  `
);
