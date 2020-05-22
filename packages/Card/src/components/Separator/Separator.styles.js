import styled from "styled-components";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import stylers from "@paprika/stylers";

export const commonStyles = styled.div`
  width: 100%;
`;

// Sizes

const sizeStyles = {
  [ShirtSizes.SMALL]: `
      min-height: ${stylers.spacer(3)};
    `,
  [ShirtSizes.MEDIUM]: `
      min-height: ${stylers.spacer(4)};
    `,
  [ShirtSizes.LARGE]: `
      min-height: ${stylers.spacer(5)};
    `,
};

export const separatorStyles = styled(commonStyles)`
  ${props => sizeStyles[props.size]};
`;
