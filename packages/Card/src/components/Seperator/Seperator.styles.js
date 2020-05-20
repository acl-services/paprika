import { css } from "styled-components";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import stylers from "@paprika/stylers";

const commonStyles = css`
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

const seperatorStyles = props => `
  ${commonStyles}
  ${sizeStyles[props.size]}
`;

export default seperatorStyles;
