import styled from "styled-components";
import tokens from "@paprika/tokens";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

export const commonStyles = styled.div`
  background: ${tokens.color.white};
  border: 1px solid #f0f0f0;
  border-radius: ${tokens.card.borderRadius};
  box-shadow: ${tokens.shadow};
  display: flex;
  flex-direction: column;
  position: relative;
`;

const sizeStyles = {
  [ShirtSizes.SMALL]: `
    width: 300px;
    height: 130px;
  `,
  [ShirtSizes.MEDIUM]: `
  width: 300px;
  height: 300px;
  `,
  [ShirtSizes.LARGE]: `
  width: 300px;
  height: 500px;
  `,
};

export const cardStyles = styled(commonStyles)`
  ${props => sizeStyles[props.size]};
`;
